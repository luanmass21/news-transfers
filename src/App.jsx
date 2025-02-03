// import LandingPage from './components/landing-page'
import LoginScreen from './components/login'
import Navbar from './components/navbar'
import './App.css'
import Footer from './components/footer'
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className="App">
      <div className='app1'>
     <Navbar/>
      </div>
      
      <div className='app2'>
      <LoginScreen/>
      </div>
      <div className='app3'>
      <Footer/>
      </div>

    </div>
  )
}

export default App

