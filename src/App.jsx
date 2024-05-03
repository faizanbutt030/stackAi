import Dashboard from "./Components/Dashboard"
import SignUp from './Components/SignUp'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './Components/Login'
import Forgotpassword from './Components/Forgopassword'
import Otp from './Components/Otp'
import Resetpassword from './Components/Resetpassword'
import CreateProject from "./Components/CreateProject"
import DeploymentTab from "./Components/DeploymentTab"


function App() {
  const handleComplete = (otp) => {
    console.log("Completed OTP:", otp);
  };

  return (
    <Router>
    <Routes>
      <Route path='/' element={ <Login/>}/>
      <Route path='/Dashboard' element={ <Dashboard/>}/>
      <Route path='/CreateProject' element={ <CreateProject/>}/>
      <Route path='/DeploymentTab' element={ <DeploymentTab/>}/>
      <Route path='/SignUp' element={ <SignUp/>}/>
      <Route path='/forgot-password' element={ <Forgotpassword/>}/>
      <Route path='/otp' element={ <Otp length={6} onComplete={handleComplete} />}/>
      <Route path='/reset-password' element={ <Resetpassword/>}/>
      
    </Routes>
  </Router>
  )
}

export default App
