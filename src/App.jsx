import './App.css';
import {useEffect, useState} from 'react';
import BottomBar from './bottombar';
import Mymenu from './menu';
import StatusBar from './statusbar';
import WindowApp from './window';
import WindowVs from './windowvs';
import Preloader from './preloader';
import MymenuItem from './menuitem';

const App = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isAboutOpen, setIsAboutOpen] = useState(false);
 const [isWindowOpen, setIsWindowOpen] = useState(false);
 const [isVsOpen, setIsVsOpen] = useState(false);
 const [isMymenuOpen, setIsMymenuOpen] = useState(false);
 const [isPreloaderOpen, setIsPreloaderOpen] = useState(true);
 const [text, setText] = useState('');
 const [links, setLinks] = useState('');
 const [index, setIndex] = useState(0);

  const toggleMenu = () => {
    if(isAboutOpen){
      setIsAboutOpen(!isAboutOpen);
    }
    setIsMenuOpen(!isMenuOpen);
  };
    const toggleAbout = () => {
        if(isMenuOpen){
        setIsMenuOpen(!isMenuOpen);
        }
    setIsAboutOpen(!isAboutOpen);
    }
    const toggleWindow = () => {
        if(isVsOpen){
            setIsVsOpen(!isVsOpen);
        }
        setIsWindowOpen(!isWindowOpen);
    }
    const toggleVS = () => {
        if(isWindowOpen){
            setIsWindowOpen(!isWindowOpen);
        }
        setIsVsOpen(!isVsOpen);
    }
    const checkMenu = (text,links,index) => {
        setIsMymenuOpen(!isMymenuOpen);
        console.log(text);
        setText(text);
        setLinks(links);
        setIndex(index);

    }
    useEffect(() => {
        setTimeout(() => {
            setIsPreloaderOpen(false);
        }, 6000);
    }, []);
    return (
        <div className='App'>
        {isPreloaderOpen ? <Preloader /> : null}
        {isMenuOpen ? <Mymenu checkMenu={checkMenu}/> : null }
        {isAboutOpen ? <StatusBar /> : null}
        {isWindowOpen ? <WindowApp /> : null}
        {isVsOpen ? <WindowVs /> : null}
        {isMymenuOpen ? <MymenuItem name={text} url={links} index={index}/> : null}
        {isPreloaderOpen ? null: <BottomBar toggleMenu={toggleMenu} toggleAbout={toggleAbout} toggleWindow={toggleWindow} toggleVS={toggleVS}/>}
        </div>
    )
}

export default App
