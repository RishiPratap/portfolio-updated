import { useState } from 'react';
import './App.css';

const WindowDesktop = () => {
  const [windows, setWindows] = useState([
    { id: 1, title: 'Chrome', isMinimized: false, isMaximized: false },
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
          {/* <embed src="https://www.google.com/" width="600" height="400" type="text/html" style={{width:'100%',height:'85vh'}}></embed> */}
          {/* <object data="https://www.google.com/" width="600" height="400" type="text/html" style={{width:'100%',height:'85vh'}}></object> */}
           <iframe src="https://google-ui-html.vercel.app/" title="chrome" frameBorder="0" style={{width:'100%',height:'85vh'}}></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WindowDesktop;
