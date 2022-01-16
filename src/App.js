import './App.css';
import Navbar from './Componants/Navbar';
import PreNavbar from './Componants/PreNavbar';
import Silder from './Componants/Silder.js'
import data from './data/data.json'
import Offers from './Componants/Offers'
import Heading from './Componants/Heading'
import StarProduct from './Componants/StarProduct'
import HotAccessoriesMenu from './Componants/HotAccessoriesMenu'
import HotAccessories from './Componants/HotAccessories'
import ProductReviews from './Componants/ProductReviews'
import InThePress from './Componants/InThePress'
import Video from './Componants/Video'
import Footer from './Componants/Footer'
import NavOption from './Componants/NavOption'
import {BrowserRouter as Router, Routes,Route,} from 'react-router-dom';
function App() {
  return (
    <Router>
     <PreNavbar/>
     <Navbar/>
     <NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
     <Silder start={data.banner.start}/>
     <Offers offer={data.offer}/>
     <Heading text="STAR PRODUCTS"/>
     <StarProduct starProduct={data.starProduct}/>
     <Heading text="HOT ACCESSORIES"/>
     <HotAccessoriesMenu/>
      <Routes>
      <Route  path="/" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/> }/>
     <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/> }/>
     <Route exact path="/smartDevices" element={<HotAccessories music={data.hotAccessories.smartDevice} musicCover={data.hotAccessoriesCover.smartDevice}/> }/>
     <Route exact path="/home" element={<HotAccessories music={data.hotAccessories.home} musicCover={data.hotAccessoriesCover.home}/> }/>
     <Route exact path="/lifeStyle" element={<HotAccessories music={data.hotAccessories.lifeStyle} musicCover={data.hotAccessoriesCover.lifeStyle}/> }/>
     <Route exact path="/mobileAccessories" element={<HotAccessories music={data.hotAccessories.mobileAccessories} musicCover={data.hotAccessoriesCover.mobileAccessories}/> }/>
     </Routes>
     <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="VIDEOS"/>
      <Video videos={data.videos}/>
      <Heading text="IN THE PRESS"/>
      <InThePress banner={data.banner}/>
      <Footer footer={data.footer}></Footer>
    </Router>
  );
}

export default App;
