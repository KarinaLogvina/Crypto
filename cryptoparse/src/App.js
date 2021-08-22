import './App.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/briefcase' exact />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
