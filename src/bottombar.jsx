import './App.css';
import { SiWindows } from "react-icons/si";
import { FaChrome } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { CiBatteryFull } from "react-icons/ci";
import PropTypes from 'prop-types';

const BottomBar = ({ toggleMenu,toggleAbout,toggleWindow,toggleVS }) => {
    function ShowPopUp(){
        toggleMenu();
    }
    function StatusBar(){
        toggleAbout();
    }
    function WindowOpen(){
        toggleWindow();
    }
    function WindowVs(){
        toggleVS();
    }
return (
    <div className="bottom_bar">    
    <div className="container_item1">
    <FaCloudSun className="icon  text-yellow-400" />
    </div>
    <div className="container_item2">
    <SiWindows className="icon text-white" title="start" onClick={ShowPopUp}/>
    <FaChrome className="icon text-white" onClick={WindowOpen}/>
    <FaFilePdf className="icon text-white" onClick={WindowVs} />
    </div>
    <div className="container_item3" onClick={StatusBar}>
    <HiSpeakerWave className="icon text-white" />
    <FaWifi className="icon text-white" />
    <CiBatteryFull className="icon text-white" />
    </div>
    </div>
);
}
BottomBar.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    toggleAbout: PropTypes.func.isRequired,
    toggleWindow: PropTypes.func.isRequired,
    toggleVS: PropTypes.func.isRequired,
  };

export default BottomBar;