import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import { Login } from "./Pages/Login"
import { Dashboard } from "./Pages/Dashboard"
import { Doctorrs } from "./Pages/Doctorrs"
import { AppointmentPage } from "./Pages/AppointmentPage"
import { OnAppointments } from "./Pages/OnAppointments"
import { Navbar } from "./Components/Navbar"

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/dashboard" Component={Dashboard}/>
        <Route path="/doctors" Component={Doctorrs}/>
        <Route path="/appointment" Component={OnAppointments}/>
        <Route path="/book/:name" Component={AppointmentPage}/>
      </Routes>
    </BrowserRouter>
  )
}