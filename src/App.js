import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/index"
import HealthAdvice  from "./pages/healthAdvice"
 import SeeingAdietitian from "./pages/SeeingADietitian"
import WorkinginDietetics from "./components/WorkingInDietetics"
import AdvocacyAndpolicy from "./pages/AdvocacyAndPolicy"
import AboutUs from "./pages/AboutUs"
import Header from "./components/header/Header"
import Joinus from "./pages/joinus/joinus"
import MemberPortal from "./pages/memberportal"
import Footer from "./components/footer/Footer"
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healthadvice" element={<HealthAdvice />} />
        <Route path="/seeingadietitian" element={<SeeingAdietitian />} />
        <Route path="/workingindietetics" element={<WorkinginDietetics />} />
        <Route path="/advocacyandpolicy" element={<AdvocacyAndpolicy />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="memberportal" element={<MemberPortal />} />
        <Route path="/joinus" element={<Joinus/>}  />
         
      </Routes>
      <Footer/>
   </BrowserRouter>
  )
}

export default App