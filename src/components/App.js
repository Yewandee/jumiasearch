
import React from 'react';
import { BrowserRouter,Route,Routes,IndexRouteProps } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import {NoMatch} from './NoMatch';
import SearchProduct from './Products';


const App= ()=>{

  return(

    <BrowserRouter>

      <div  style={{minHeight:'100vh', position:'relative'}}>

        <Header/>

        <Routes>
          
          <Route path='/' element={<Home/>}/>
          
          <Route path='/product/:productName' element={<SearchProduct/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/*' element={<NoMatch/>}/>

        </Routes>

        <Footer/>

      </div>
      
    </BrowserRouter>

  )

}

export default App;