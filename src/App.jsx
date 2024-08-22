import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './comp/nav'
import Footer from './comp/footer'
import TestB from './comp/home'
import 'bootstrap/dist/css/bootstrap.min.css'
import EmployeeList from './comp/checkapi'
import Book from './comp/Book'
import Contact from './comp/Contact'
import { Routes,Route } from "react-router-dom"
import EventRegistrationForm from './comp/editer'
import Checkwether from './comp/Checkw1'
import LastWether from './comp/LastWether'
import Wethar from './comp/finalwether'
import WeatherContainer from './comp/Testimga'
import Jstest from './comp/Jstest'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div>
       <Checkwether/>
      
    </div>
  )
}

export default App
