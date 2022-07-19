import Header from './components/Header';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserComponent from './components/UserComponent';
import UserComponentById from './components/UserComponentById';
import FooterComponent from './components/FooterComponent';
import UploadUserComponent from './components/UploadUserComponent';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            {/* <Route exact path="/" element={<UserComponent />} /> */}
            <Route path="/" exact component={UserComponent}></Route>
            {/* <Route exact path="/employees" element={<UserComponent />} /> */}
            <Route path="/employees" component={UserComponent}></Route>
            <Route path="/upload" component={UploadUserComponent}></Route>
            {/* <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route> */}
            {/* <Route exact path="/:id" element={<UserComponentById />} /> */}
            <Route path="/:id" component={UserComponentById}></Route>
            {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
