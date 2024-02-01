import './App.css'
import Lottie from "lottie-react";
import wink from './assets/wink.json';

const Preloader = () => {
  return (
    <div className='userscreen'>
      <div className='wink'><Lottie animationData={wink} loop={true}/></div>
    </div>
  )
}

export default Preloader