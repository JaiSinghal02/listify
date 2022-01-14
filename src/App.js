import './App.css';
import './assets/fonts.css'
import { useEffect } from 'react';
import {withRouter,Route,Switch,HashRouter} from 'react-router-dom'
import axios from 'axios'
import Layout from './components/Layout/Layout'
import Login from './containers/Login/Login'
import Dashboard from './containers/Dashboard/Dashboard';

function App() {
  useEffect(()=>{
    if(localStorage.getItem('token')){
      axios.get('https://listify-server.herokuapp.com/autoLogin',{
        headers:{
          'x-auth-token': localStorage.getItem('token')
        }
      })
      .then()
      .catch((err)=>{
        localStorage.removeItem('token')
      })

    }
  },[])
  return (
    <div className="App">
      <Layout>
        <HashRouter>
          <Route path="/dashboard" exact component={Dashboard}></Route>
          <Route path="/" exact component={Login}></Route>
        </HashRouter>
      </Layout>
    </div>
  );
}

export default withRouter(App);
