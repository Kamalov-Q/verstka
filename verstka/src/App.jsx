/* eslint-disable no-unused-vars */
import Brands from "./Components/Brands/Brands";
import Comments from "./Components/Comments/Comments";
import Footer from "./Components/Footer/Footer";
import Comfort from "./Components/Qulayliklar/Qulay";
import Tizim from "./Components/Tizim/Tizim";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Tizim/>
    <Comfort/>
    <Brands/>
    <Comments/>
    <Footer/>
    </>
  )
}

export default App;
