import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Counter from './pages/Counter'
import Header from './components/header/Header'
import Login from './pages/login/Login'
import UserList from './pages/UserList'
import Roles from './pages/Roles'
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
import DashboardStudent from './pages/dashboardStudent/DashboardStudent'
import DashboardStudentAdoption from './pages/dashboardStudent/DashboardStudentAdoption'
import Messenger from './pages/messenger/Messenger'

function App () {
  //const { context } = useContext(Context)
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/students" element={<Students/>}/>
          <Route path="/student" element={<Student/>}/>
          <Route path="/registerStudent" element={<RegisterStudent/>}/>
          <Route path="/registerCompany" element={<RegisterCompany/>}/>
          <Route path="/dashboardStudent" element={<DashboardStudent/>}/>
          <Route path="/dashboardStudentAdoption" element={<DashboardStudentAdoption/>}/>
          <Route path="/roles" element={<Roles/>}/>
          <Route path="/messenger" element={<Messenger/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/login" element={<Login/>}/>
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
