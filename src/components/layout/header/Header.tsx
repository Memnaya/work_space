import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.headerLabel}>
                    <img src="" alt="Label" />
                </div>
                <ul className={styles.headerNav}>
                    <li>
                        <a href="https://vite.dev" target="_blank">wi-fi приколы</a>
                    </li>
                    <li>
                        <a href="https://react.dev" target="_blank">кабель приколы</a>
                    </li>
                    <li>
                        <a href="https://react.dev" target="_blank">тут чето еще будет</a>
                    </li>
                </ul>
                <div className={styles.headerSingIn}>
                    <a href="">
                        <img src="" alt="" />
                        Войти
                    </a>
                </div>
            </div>
        </>
    )
}

export default Header;