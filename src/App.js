
import './App.css';
import AddCustomer from './componets/AddCustomer';
import CustomerList from './componets/CustomerList';
import FooterComponent from './componets/FooterComponent';
import HeaderComonents from './componets/HeaderComonents';
import ViewComponent from './componets/ViewComponent';
import {BrowserRouter as Router, Route, Switch, NavLink, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <HeaderComonents/>
    <br></br><br></br>
    <div className='container'>
      <Routes>
        <Route exact path="/" Component={CustomerList}></Route>
        <Route path='/AddCustomer' Component={AddCustomer}></Route>
        <Route path="/editCustomer/:idd" Component={AddCustomer}></Route>
        <Route path="/viewCustomer/:idd" Component={ViewComponent}></Route>
        <Route path="/home" Component={CustomerList}></Route>
      </Routes>
    
    </div>
    <FooterComponent/>
    </Router>
   
    </>
   
    
  );
}

export default App;
