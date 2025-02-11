import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
    const [theme, setTheme] = useState<string>(document.documentElement.getAttribute('data-theme') || 'light');

    useEffect(() => {
        // Function to update theme when `data-theme` changes
        const observer = new MutationObserver(() => {
            const newTheme = document.documentElement.getAttribute('data-theme') || 'light';
            setTheme(newTheme);
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

        return () => observer.disconnect();
    }, []);

    return (
        <header className='buddy-header'>
            <img id='logo' src={theme === 'dark' ? './buddyDark.png' : './buddyLight.png'} alt='Buddy Logo' />
        </header>
    );
};

export default Header;
