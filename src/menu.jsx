import './App.css';
import PropTypes from 'prop-types';

const Mymenu = ({checkMenu}) => {
  const menuItems = ['https://cdn.iconscout.com/icon/premium/png-256-thumb/bot-2436168-2067854.png?f=webp', 'https://cdn.iconscout.com/icon/free/png-256/free-prompt-search-8318817-6887564.png?f=webp', 'https://cdn.iconscout.com/icon/free/png-256/free-to-do-list-3524114-2947644.png', 'https://cdn.iconscout.com/icon/premium/png-256-thumb/expression-3118033-2607314.png', 'https://cdn.iconscout.com/icon/free/png-256/free-qr-scan-3582609-3012544.png?f=webp', 'https://cdn.iconscout.com/icon/premium/png-256-thumb/cat-2473319-2077293.png?f=webp','https://cdn.iconscout.com/icon/premium/png-256-thumb/yoga-posture-1419570-1199016.png?f=webp'];
  const menuText = ['AI BOT', 'Promptopia', 'To-Do List', 'Face Emotion', 'Image Scan', 'Cat Finder','Yoga Posture Correction']
  const links = ['https://ai-chat-bot-iota.vercel.app/','https://promptopia-snowy-rho.vercel.app/','https://to-do-list-two-sage.vercel.app/','https://face-emotion-detector-pearl.vercel.app/','https://polite-sea-0567d8010.3.azurestaticapps.net/','https://builder-io-task.vercel.app/','https://yog-six.vercel.app/']

  return (
    <div className='mainmenu'>
      <ul className='menu_items'>
        {menuItems.map((item, index) => {
          return <li key={index}><img src={item} className='cursor-pointer w-16 h-16' onClick={()=>checkMenu(menuText[index],links[index],index)} /><p className='text-left'>{menuText[index]}</p></li>;
        })}  
      </ul>
    </div>
  );
}

Mymenu.propTypes = {
  checkMenu: PropTypes.func.isRequired,
};

export default Mymenu;
