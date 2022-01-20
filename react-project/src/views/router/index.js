import Home from '../../views/home/home.jsx'
import About from '../../views/about/about.jsx'
import Alex from '../../views/user/Alex.jsx'
import Bill from '../../views/user/Bill.jsx'
import Tom from '../../views/user/Tom.jsx'
const routeModules  = [
  { title: '首页', path: '/home', icon: '<UserOutlined />', component: Home },
  { title: 'nav 2',  path: '/about',icon:'<UserOutlined />' ,component: About},
  {
    title: 'User', path: '/user', icon: '<VideoCameraOutlined />',
    subs: [{ title: 'Tom', path: '/user/tom', component: Tom },
      { title: 'Bill', path: '/user/bill', component: Bill },
      { title: 'Alex',  path: '/user/alex', component: Alex }]
  },
]
export default routeModules 