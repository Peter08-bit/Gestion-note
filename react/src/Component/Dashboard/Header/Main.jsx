import Home from "../Home"
import PageTitle from "./PageTitle"
import './main.css'
// import {main} from '@popperjs/core';
function Main() {
  return (
    <main id="main" className="main">
      <PageTitle/>
      <Home/>
    </main>
  )
}

export default Main