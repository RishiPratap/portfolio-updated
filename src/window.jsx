import { useState } from 'react';
import './App.css';

const WindowDesktop = () => {
  const [windows, setWindows] = useState([
    { id: 1, title: 'Window 1', isMinimized: false, isMaximized: false },
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
           <iframe src="https://www.google.com" title="chrome" frameBorder="0" style={{width:'100%',height:'85vh'}}></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WindowDesktop;
