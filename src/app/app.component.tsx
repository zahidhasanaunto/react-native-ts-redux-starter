import React from 'react';
import { AppState, AsyncStorage, StatusBar, Text } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { AppNavigator } from '../navigation/app/app';
import reducers from '../store/reducers';
import { AppLoading, LoadFontsTask, Task } from './app-loading.component';

const loadingTasks: Task[] = [
  () => LoadFontsTask({
    'opensans-regular': require('../assets/fonts/opensans-regular.ttf'),
    'roboto-regular': require('../assets/fonts/roboto-regular.ttf'),
  })
];

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const AppRoot = ({ appStore }): React.ReactElement => {
  return (
    <React.Fragment>
      <Provider store={appStore}>
        <StatusBar />
        <AppNavigator />
      </Provider>
    </React.Fragment>
  );
};

interface IState {
  store: any;
  isStoreLoading: boolean;
}

export default class App extends React.Component<{}, IState> {

  constructor(props) {
    super(props);
    this.state = {
      isStoreLoading: false,
      store: store,
    }
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange.bind(this));
    this.setState({ isStoreLoading: true });
    AsyncStorage.getItem('completeStore').then((value) => {
      if (value) {
        const initialStore = JSON.parse(value);
        this.setState({ store: createStore(reducers, initialStore, applyMiddleware(ReduxThunk)) });
      } else {
        this.setState({ store: store });
      }
      this.setState({ isStoreLoading: false });
    }).catch((error) => {
      this.setState({ store: store });
      this.setState({ isStoreLoading: false });
    })
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange.bind(this));
  }
  _handleAppStateChange(currentAppState) {
    const storingValue = JSON.stringify(this.state.store.getState());
    AsyncStorage.setItem('completeStore', storingValue);
  }

  render() {
    if (this.state.isStoreLoading) {
      return <Text>Loading Store</Text>
    } else {
      return (
        <AppLoading
          tasks={loadingTasks}
        >
          {props => <AppRoot appStore={this.state.store} {...props} />}
        </AppLoading>
      )
    }
  }
}