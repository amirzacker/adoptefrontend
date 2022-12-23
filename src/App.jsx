import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Login from './pages/login/Login'
import UserList from './pages/UserList'
import Register from './pages/Register2'
import NotFound from './pages/NotFound'
import Post from './pages/Post'
import User from './pages/User'
import { Context } from './context'
import classnames from 'classnames'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Students from './pages/students/Students'
import Student from './pages/student/Student'
import RegisterStudent from './pages/registerStudent/RegisterStudent'
import RegisterCompany from './pages/registerCompany/RegisterCompany'
import Dashboard from './pages/dashboard/Dashboard'
import DashboardStudentAdoption from './pages/dashboard/DashboardStudentAdoption'
import Messenger from './pages/messengerx/Messenger';
import { AuthContext } from "./context/AuthContext";

function App () {
  //const { context } = useContext(Context)
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/students" element={<Students/>}/>
          <Route path="/student/:id" element={<Student/>}/>
          <Route path="/registerStudent" element={<RegisterStudent/>}/>
          <Route path="/registerCompany" element={<RegisterCompany/>}/>
          <Route path="/dashboardStudentAdoption" element={<DashboardStudentAdoption/>}/>
 
          {user ? <Route path="/login" element={<Navigate to="/dashboard" />}/>  : 
          <Route path="/login" element={<Login/>}/>
          }
          {!user ? <Route path="/messenger" element={<Navigate to="/login" />}/>  : 
          <Route path="/messenger" element={<Messenger/>}/>
          }
          {!user ? <Route path="/dashboard" element={<Navigate to="/login" />}/>  : 
          <Route path="/dashboard" element={<Dashboard/>}/>
          }
      
          <Route path="/register" element={<Register/>}/>
          <Route path="/posts/:id" element={<Post/>}/>
          <Route path="/users/:id" element={<User/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
