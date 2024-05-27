import './App.css'
import Dashboard from './Component/Dashboard/Dashboard'
import Main from './Component/Dashboard/Header/Main'
// import Edit from './Component/Dashboard/Table/Enseignant/Edit'
import Enseignant from './Component/Dashboard/Table/Enseignant/Enseignant'
import Etudiant from './Component/Dashboard/Table/Etudiant/Etudiant'
import Cours from './Component/Dashboard/Table/Matier/Cours'
import Note from './Component/Dashboard/Table/Note/Note'
import Table from './Component/Dashboard/Table/Table'
// import Cours from './Component/Dashboard/Table/Cours'
// import Enseignant from './Component/Dashboard/Table/Enseignant'
// import Etudiant from './Component/Dashboard/Table/Etudiant'
// import Note from './Component/Dashboard/Table/Note'
// import Read from './Component/Dashboard/Table/Read'
import Login from './Component/Login/Login'
import Registre from './Component/Registre/Registre'
// import reacte router dom
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

// creation de router

const router = createBrowserRouter([
{
  path: '/',
  element: <div><Login/></div>
},
{
  path: '/registre',
  element: <div><Registre/></div>
},
{
  path: '/dashboard',
  element: <div><Dashboard/></div>
},
{
  path: '/main',
  element: <div>< Main /></div>
},
{
  path: '/dashboard/enseignant',
  element: <div>< Enseignant /></div>
},
{
  path: '/dashboard/etudiant',
  element: <div>< Etudiant /></div>
},
{
  path: '/dashboard/table',
  element: <div>< Table /></div>
},
{
  path: '/dashboard/cours',
  element: <div>< Cours /></div>
},
{
  path: '/dashboard/note',
  element: <div>< Note /></div>
},


])

function App() {

  return (
    <>
    <div>
      <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App
