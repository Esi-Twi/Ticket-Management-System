import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Welcome from "./pages/Welcome"
import Customer from "./pages/Customer"
import AdminLogin from "./pages/Admin-login"
import Transaction from "./pages/Transaction"
import PrintedTicket from "./pages/Printed-ticket"
import Admin from "./pages/Admin"

function App() {
  return (
    <main>
      <Router>
        <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/customer' element={<Customer/>}/>
            <Route path='/admin-login' element={<AdminLogin/>}/>
            <Route path='/transaction' element={<Transaction/>}/>
            <Route path='/printed-ticket' element={<PrintedTicket/>}/>
            <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
