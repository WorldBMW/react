import React from 'react'
import { Routes ,Route} from 'react-router-dom'
// import Home from '../../views/home/home.jsx'
// import About from '../../views/about/about.jsx'
import  routeModules  from '../router/index.js' 
export default class ContentMain extends React.Component {
  render () { 
    return (
      <Routes>
        { 
       routeModules.map((item, index) => { 
        if (item.subs) {
          let subRoute = 
              item.subs.map((items) => { 
                return <Route path={items.path} exact element={ <items.component></items.component>}></Route>
              })
          return subRoute
        } else { 
          return <Route path={item.path} exact element={ <item.component></item.component>}></Route>
        }
      })
        }
      </Routes>
    )
  }
}