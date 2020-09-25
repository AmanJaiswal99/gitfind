import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/user/Users';
import Search from './components/user/search';
import Axios from 'axios';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/user/user';


class App extends React.Component {

  state = {
    users: [],
    loading: false,
    user: {},
    repos: []
   
    
  }
  //  async componentDidMount(){
   
  //    this.setState({loading: true});
  //     const res = await Axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //     this.setState({users:res.data, loading:false})
  //    }
  // search github users
searchUsers = async text => {
  this.setState({empty:false});
  this.setState({loading:false})
  this.setState({alert:false})
  
  if(this.state.users.length===0){
    this.setState({alert:true})
    setTimeout(() => this.setState({alert:false}), 1000);
    this.setState({loading:true})
  }
  else {
    this.setState({loading: true});
    this.setState({alert:false})
  }
 
 
  
  
  
  const res = await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   this.setState({users:res.data.items, loading:false,alert:false,})
  
}

// get single github user

getuser = async (username) => {
  this.setState({loading:true})
  console.log(username )
  const res = await Axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   this.setState({user:res.data, loading:false,alert:false,})
}

//get repo
getuserRepos = async (username) => {
  this.setState({loading:true})
  console.log(username )
  const res = await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   this.setState({repos:res.data, loading:false,alert:false,})
}

//
clearusers = async text => {
  
  this.setState({empty:true})
  this.state.users.length = 0
}




 
  render(){
    const {user,repos} = this.state;
    return (
      <Router>
      <div className="App">
        <Navbar/>
        
        <div className="container">
        <Alert alert={this.state.alert}/>
        <Switch>
          <Route exact path='/' render={props => (
            <Fragment>
        <Search searchUsers={this.searchUsers} 
        clearusers={this.clearusers} 
        clearbutton={this.state.users.length > 0? true:false}/>
        <Users users={this.state.users} loading={this.state.loading} empty={this.state.empty}/>
            </Fragment>
          )}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/user/:login' render={props=>(
            <User {...props} getUser={this.getuser} getuserRepos={this.getuserRepos} user={user} repos={repos} loading={this.state.loading}/>
          )}/>
        </Switch>
        
        </div>
        
      </div>
      </Router>
    );
  }
  


}

export default App;
