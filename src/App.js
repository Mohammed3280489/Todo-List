import './App.css';
import Home from './components/home';
import {Provider} from 'react-redux';
import store from './store/redux-store';
function App() {
  return (
    <Provider store = {store}>
    <Home></Home>
    </Provider>
  );
}

export default App;
