import './Dashboard.css'
// import les icons
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'remixicon/fonts/remixicon.css'
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Header from './Header/Header'
import Side from './Side'
import Main from './Header/Main'
// import Table from './Table/Table'

const Dashboard = () => {
  return(
    <>
    <Header/>;
    <Side/>
    <Main/>
    </>
  )
}

export default Dashboard