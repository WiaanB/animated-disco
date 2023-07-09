import React from 'react';
import { INavBarProps } from './INavBarProps';
import { Menubar } from 'primereact/menubar';
import { MenuItems } from '@/constants/MenuItems';
import './style.scss';
import useMenuItems from '@/services/Hooks/useMenuItems';

import Logo from '@/components/Logo';

const NavBar: React.FunctionComponent<INavBarProps> = () => {
  useMenuItems();

  const image = <Logo size="small" appName={true} />

  return (
    <Menubar model={MenuItems} start={image} className='menubar-desktop' />
  )
}

export default NavBar;