


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Aboute from './Pages/Aboute'
import Product from './Pages/Product'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Header from './Components/Header'
import Footer from './Components/Footer'


const App = () => {


  return (
   
      <BrowserRouter>
       <div className=' '>   
      <Header/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/aboute'element={<Aboute/>}/>
        <Route path='/product'element={<Product/>} />
        <Route path='/service'element={<Service/>} />
        <Route path='/contact'element={<Contact/>}/>
      </Routes>
      <Footer/>
      </div>
      </BrowserRouter>
  )
}

export default App
