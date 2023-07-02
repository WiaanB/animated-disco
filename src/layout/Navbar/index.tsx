import React, { useEffect } from 'react';
import { INavBarProps } from './INavBarProps';
import { Menubar } from 'primereact/menubar';
import { MenuItems } from '@/constants/MenuItems';
import { useNavigate } from 'react-router-dom';

import Logo from '@/components/Logo';

const NavBar: React.FunctionComponent<INavBarProps> = () => {

  const navigator = useNavigate();

  const image = <Logo className='menu-logo' size="small" />

  useEffect(() => {
    const handleClick = (e: any) => {
      const path = e?.detail?.path ?? '/not-found';
      navigator(path)
    };

    window.addEventListener('handleMenuItemClick', handleClick);

    return () => {
      window.removeEventListener('handleMenuItemClick', handleClick);
    };
  }, []);

  return (
    <Menubar model={MenuItems} start={image} className='menubar-desktop' />
  )
}

export default NavBar;