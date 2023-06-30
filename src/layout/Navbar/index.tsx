import React from 'react';
import { INavBarProps } from './INavBarProps';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { useNavigate } from 'react-router-dom';

import Routes from '@/constants/Routes';

const NavBar: React.FunctionComponent<INavBarProps> = props => {

    let navigate = useNavigate();

    const items: MenuItem[] = [
        {
            label: 'Games',
            icon: 'pi pi-fw pi-box',
            items: [
                {
                    label: 'New Game',
                    icon: 'pi pi-fw pi-plus',
                    command: () => navigate(Routes["new_game"])
                },
                {
                    label: 'My Games',
                    icon: 'pi pi-fw pi-list',
                    command: () => navigate(Routes['games'])
                }
            ]
        },
        {
            label: 'My Profile',
            icon: 'pi pi-fw pi-user',
            command: () => navigate(Routes['profile'])
        }
    ];

    return (
        <div className='navbar-outer'>
            <Menubar model={items} />
        </div>
    )
}

export default NavBar;