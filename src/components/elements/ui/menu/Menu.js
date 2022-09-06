import React, { useState } from 'react'

import MenuItem from './MenuItem';
import MenuList from '../../../../MenuList';

const Menu = () => {


    const [isOpen, setOpen] = useState({open: true, name: ''});
    const toggleClass = () => {
        setOpen(!isOpen);
    };

    return (
        <ul className="menu-inner py-1">
            { 
                MenuList.map((menu) => {
                    return (
                        <>
                            { 
                                !menu.submenu ? 
                                <MenuItem items={menu} key={menu.key} /> : 
                                <MenuItem items={menu} open={isOpen} onClick={toggleClass} key={menu.key}>
                                    {                                        
                                        menu.submenu.map((submenu) => {
                                            return (
                                                <>
                                                    <MenuItem items={submenu} key={submenu.key}/>
                                                </>
                                            )
                                        })
                                        
                                    }
                                </MenuItem>
                            }
                        </>                        
                    )
                })
            }
        </ul>        
    );
}
  
export default Menu;