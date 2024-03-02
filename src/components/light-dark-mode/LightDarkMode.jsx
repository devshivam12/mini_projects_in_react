import React from 'react'
import useLocalStorage from './useLocalStorage'
import './theme.css'

const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    const handleToggale = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    console.log(theme)
    return (
        <div className='light-dark-mode' data-theme={theme}>
            <div className="container">
                <p>Hey There !</p>
                <button onClick={handleToggale}>Click Here</button>
            </div>
        </div>
    )
}

export default LightDarkMode
