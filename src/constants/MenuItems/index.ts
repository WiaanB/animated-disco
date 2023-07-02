import { MenuItem } from 'primereact/menuitem';

import { Routes } from '@/constants/Routes';

const navigator = (path: string) => {
    window.dispatchEvent(new CustomEvent('handleMenuItemClick', { detail: { path } }));
}

export const MenuItems: MenuItem[] = [
    {
        label: 'Games',
        icon: 'pi pi-fw pi-box',
        items: [
            {
                label: 'New Game',
                icon: 'pi pi-fw pi-plus',
                command: () => navigator(Routes["new_game"])
            },
            {
                label: 'My Games',
                icon: 'pi pi-fw pi-list',
                command: () => navigator(Routes['games'])
            }
        ]
    },
    {
        label: 'My Profile',
        icon: 'pi pi-fw pi-user',
        command: () => navigator(Routes['profile'])
    },
    {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        command: () => navigator(Routes['login'])
    }
];