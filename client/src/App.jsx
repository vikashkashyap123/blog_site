import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute '
import PrivateRoute from './components/PrivateRoute'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Createpost from './pages/Createpost'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import PostPage from './pages/PostPage'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import UpdatePost from './pages/UpdatePost'
import Search from './pages/Search'
export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>
      <Route element={<OnlyAdminPrivateRoute />}>
        <Route path="/create-post" element={<Createpost/>}/>
        <Route path="/update-post/:postId" element={<UpdatePost/>}/>
      </Route>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path='/post/:postSlug' element={<PostPage/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

