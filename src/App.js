// How inefficient is to import React in any file that uses it? Would there be another way??
// import React from 'react';
// Because I'm using them here, I have to import them from here, not in index.js
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
// In the class' video, they used HashRouter, but in this article, it is recommended to use BrowserRouter instead, and only if strictly necessary, use HashBrowser

// Define context - As read in here: separate the UserContext in a different file, may provide more flexibility when adding a backend
// const UserContext = React.createContext(null);
import UserContext from './context';

import Home from './home';
import Deposit from './deposit';
import Withdraw from './withdraw';
import Balance from './balance';
import AllData from './alldata';
import Login from './login';
import CreateAccount from './createaccount';
import About from './about';
import Products from './products';
import NavBar from './navbar';
import Footer from './footer';

import './App.css';

// the syntax here is quite different to the one presented in the videos, most probably because they are outdated and were made before react-router-dom v6. See this thread https://stackoverflow.com/questions/69832748/error-error-a-route-is-only-ever-to-be-used-as-the-child-of-routes-element
// and this article: https://reactrouter.com/docs/en/v6/getting-started/concepts
function App() {
  return (
      <div className="App">
        <h1> 
          <img src="./bank 2.png" height="64px" alt="Bank Logo Left"/>  
          Welcome to Bad Bank 
          <img src="./bank 2.png" height="64px" alt="Bank Logo Right"/> 
        </h1>
        <BrowserRouter>
        {/* Add the navigation bar */}
        <NavBar />
        <hr/>
        {/* By using Provider, we are making the value available to all children and grandchildren */}
        {/* <UserContext.Provider value={{users:['Jose']}}> */}
        {/* TODO: value can be read from a json file, so later on would be better to create a function to specifically get them... */}
        <UserContext.Provider value={{users:[{name: 'Jose',
        email:'jose.ulloa@isandex.com', password:'secret', balance:100}]}}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/createAccount" element={<CreateAccount/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/deposit" element={<Deposit/>} />
            <Route path="/withdraw" element={<Withdraw/>} />
            <Route path="/balance" element={<Balance/>} />
            <Route path="/allData" element={<AllData/>} />
            <Route path="/about" element= {<About/>} />
            <Route path="/products" element={<Products/>} />
          </Routes>
        </UserContext.Provider>
        </BrowserRouter>
        <Footer />
      </div>
  );
}

// In order to clarify import/export default and non-defaults, see this thread:
// https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281#36796281
export default App;
// export {UserContext, useContext};
