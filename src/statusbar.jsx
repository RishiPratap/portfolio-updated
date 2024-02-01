import './App.css';
import { HiSpeakerWave } from "react-icons/hi2";
import { FaWifi } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";

const StatusBar = () => {
return(
    <div className='mainmenu-status'>
    <div className='menu_items-status'>
    <HiSpeakerWave className="icon text-white" />
    <input type='range' className='slider'/>
    </div>
    <div className='menu_items-status'>
    <FaWifi className="icon text-white w-10 h-10" />
    <p className='text-white'>Connected</p>
    </div>
    <div className='menu_items-status'>
    <CiBatteryFull className="icon text-white w-10 h-10" />
    <p className='text-white'>100%</p>
    </div>
    </div>
);
}

export default StatusBar;