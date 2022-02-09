// import Home from '../../views/home/home.jsx'
import About from '../../views/about/about.jsx'
import Alex from '../../views/user/Alex.jsx'
import Bill from '../../views/user/Bill.jsx'
import Tom from '../../views/user/Tom.jsx'
// import Login from '../../views/login/index.jsx'
// import Layout from '../../views/layout/index.jsx'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
const routeModules  = [
  // { title: '首页', path: '/home', icon: '<UserOutlined />', component: Home },
  { title: 'nav 2',  path: '/about',icon:UserOutlined  ,component: About},
  {
    title: 'User', path: '/user', icon: VideoCameraOutlined ,
    subs: [{ title: 'Tom', path: '/user/tom', icon:MenuUnfoldOutlined,component: Tom },
      { title: 'Bill', path: '/user/bill', icon:UploadOutlined, component: Bill },
      { title: 'Alex',  path: '/user/alex', icon:MenuFoldOutlined,component: Alex }]
  },
]
export default routeModules 