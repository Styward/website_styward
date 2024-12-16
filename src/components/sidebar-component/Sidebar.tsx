import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faHouse ,faBriefcase, faAddressCard} from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

interface SidebarProps {
    onNavigate: (section: string) => void;
  }

const Sidebar: React.FC <SidebarProps> =({onNavigate}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    //const location = useLocation();
    // const[activePath, setActivePath] = useState(location.pathname);
    


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };

      const menuItems = [
        { label: 'Home', path: '/', icon:<FontAwesomeIcon style={{ color:'#FFFFFF' }} icon={faHouse} /> },
        { label: 'About Me', path: '/about-me', icon:<FontAwesomeIcon style={{ color:'#FFFFFF' }} icon={faAddressCard} />},
        { label: 'Projects', path: '/projects', icon:<FontAwesomeIcon style={{ color:'#FFFFFF' }} icon={faBriefcase} /> },
       
      ];
      

     
    return(
        <>
        <div className="hamburger-menu" onClick={toggleSidebar}>
        <FontAwesomeIcon style={isSidebarOpen? { color:'#FFFFFF' } : {color:'#09a890'}} icon={faBars} />
      </div>

      <div className={`sidebar ${isSidebarOpen ? 'open' : 'close'}`}>
        <div className='content-menu-items'>
        <ul className='menu-items'>
            {menuItems.map(item =>(
                <li 
                key={item.label}
                // className={`icons-sidebar ${activePath ===item.path? 'active':''}`}
                className={`icons-sidebar active`}
                onClick={()=>onNavigate(item.path)}
                style={{cursor:'pointer'}}
                >
                    {item.icon}
                </li>
            ))}
        </ul>
        </div>

      </div>
        </>
    );

}

export default Sidebar;