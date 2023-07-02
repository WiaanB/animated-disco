import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useMenuItems() {
    const navigator = useNavigate();

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
}