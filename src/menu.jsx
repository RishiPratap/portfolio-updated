import './App.css';
import PropTypes from 'prop-types';

const Mymenu = ({checkMenu}) => {
  const menuItems = ['https://cdn3d.iconscout.com/3d/free/thumb/free-diary-3985337-3317715.png?f=webp', 'https://cdn3d.iconscout.com/3d/free/thumb/free-powerpoint-5562344-4642748.png?f=webp', 'https://cdn3d.iconscout.com/3d/free/thumb/free-ios-photos-2978365-2476742.png?f=webp', 'https://cdn3d.iconscout.com/3d/free/thumb/free-video-9060326-7475482.png?f=webp', 'https://cdn3d.iconscout.com/3d/free/thumb/free-pinterest-2950128-2447887.png?f=webp', 'https://cdn3d.iconscout.com/3d/free/thumb/free-google-5148287-4299203.png?f=webp'];
  const menuText = ['Work Experience', 'Education', 'Projects', 'Skills', 'Interests', 'Awards']
  const links = ['https://www.github.com','https://www.github.com','https://www.github.com','https://www.github.com','https://www.github.com','https://www.github.com']

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