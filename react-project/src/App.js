
// import { Switch } from 'antd';
import React, { Component } from 'react';
import Index from './views/layout/index.jsx'
import { Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './views/home/home.jsx'
import Login from './views/login/index.jsx'
import About from './views/about/about.jsx'
import Tom from './views/user/Tom.jsx'
import Alex from './views/user/Alex.jsx'
import Bill from './views/user/Bill.jsx'
// import routers from './views/router/index.js'
// class App extends Component  {
//   render () {
//     return (
//       <Index></Index>
//     )
//   }
    

// }
class App extends Component {
  render() {
    return (
      <Routes>
        <Route path='/login' element={<Login></Login>} />
        <Route path="/" element={<Index></Index>}>
          <Route path='/about' element={<About></About>} ></Route>
          <Route path='/user'>
            <Route path='/user/tom' element={<Tom></Tom>}></Route>
            <Route path='/user/bill' element={<Bill></Bill>}></Route>
            <Route path='/user/alex'  element={<Alex></Alex>}></Route>
          </Route>
        </Route>
      </Routes>
    )
  }
}

export default App;
