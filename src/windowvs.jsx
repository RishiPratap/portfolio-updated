import  { useState } from 'react';
import PdfFile from '../data/resumerishi_latest.pdf'
import './App.css';

const Vscode = () => {
    const [windows, setWindows] = useState([
        { id: 2, title: 'Resume', isMinimized: false, isMaximized: false },
      ]);
    
      const minimizeWindow = (id) => {
        setWindows((prevWindows) =>
          prevWindows.map((window) =>
            window.id === id ? { ...window, isMinimized: true, isMaximized: false } : window
          )
        );
      };
    
      const maximizeWindow = (id) => {
        setWindows((prevWindows) =>
          prevWindows.map((window) =>
            window.id === id ? { ...window, isMaximized: !window.isMaximized, isMinimized: false } : window
          )
        );
      };
    
      const closeWindow = (id) => {
        setWindows((prevWindows) => prevWindows.filter((window) => window.id !== id));
      };
    
      return (
        <div className="window-desktop">
          {windows.map((window) => (
            <div
              key={window.id}
              className={`window ${window.isMinimized ? 'minimized' : ''} ${
                window.isMaximized ? 'maximized' : ''
              }`}
            >
              <div className="title-bar">
                <div className="title">{window.title}</div>
                <div className="window-buttons">
                  <button onClick={() => minimizeWindow(window.id)}>Min</button>
                  <button onClick={() => maximizeWindow(window.id)}>Max</button>
                  <button onClick={() => closeWindow(window.id)}>Close</button>
                </div>
              </div>
              <div className="content">
               <iframe src={PdfFile} title="vscode" frameBorder="0" style={{width:'100%',height:'85vh'}}></iframe>
              </div>
            </div>
          ))}
        </div>
      );
    }   

export default Vscode