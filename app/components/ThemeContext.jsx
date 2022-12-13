'use client';
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

export const ThemeToggle = ({ defaultTheme, themes, children }) => {

    const [theme, setTheme] = useState(defaultTheme);
    return (<>
        <div className='flex justify-end'>
            {themes.map(t => <button className={`p-2 border first:rounded-l last:rounded-r ${t.key === theme ? 'underline' : ''} ${t.className}`} key={t.key} onClick={() => setTheme(t.key)}>{t.text}</button>)}
        </div>

        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    </>
    );
}


export const WithThemeSelection = ({ theme, children }) => {
    const currentTheme = useContext(ThemeContext);
    const className = currentTheme !== theme ? "hidden" : '';
    return <div className={className}>{children}</div>
}