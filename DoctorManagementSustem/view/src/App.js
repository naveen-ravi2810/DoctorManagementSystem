import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import { Login } from "./Pages/Login"
import { Dashboard } from "./Pages/Dashboard"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/dashboard" Component={Dashboard}/>
      </Routes>
    </BrowserRouter>
  )
}