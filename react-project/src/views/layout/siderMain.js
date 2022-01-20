import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Link} from 'react-router-dom'
import { Menu } from 'antd';
import routeModules from '../router/index.js' 
const { SubMenu } = Menu;
export default class SiderMain extends React.Component { 
  render () { 
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
        {
          routeModules.map((item, index) => { 
            if (item.subs) {
              let subMenu = <SubMenu key="sub1" title={ item.title} >
                {
                  item.subs.map((items,indexs) => { 
                    return <Menu.Item key={indexs+'0'}><Link to={ items.path}></Link>{ items.title}</Menu.Item>
                  })
                }
              </SubMenu>
              return subMenu
            } else { 
              return <Menu.Item key={index} ><Link to={ item.path}></Link>
                {item.title}
            </Menu.Item>
            }
          })
        }
      </Menu>
    )
  }
}