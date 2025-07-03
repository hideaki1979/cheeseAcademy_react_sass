import React, { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header id="header">
            {/* モバイル・タブレット用：ハンバーガーメニュー */}
            <div className='hamburger-area'>
                {/* ロゴ */}
                <img src="/img/header_logo.png" alt="チーズアカデミーのヘッダーロゴ" />

                {/* ハンバーガーボタン */}
                <div
                    className={`hamburger${isMenuOpen ? ' active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul
                    className={`slide-menu${isMenuOpen ? ' active' : ''}`}
                >
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#course">COURSE</a></li>
                    <li><a href="#news">NEWS</a></li>
                    <li><a href="#access">ACCESS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>

            {/* デスクトップナビ */}
            <div className='tabmenu-animation'>
                <div className='tabmenu-area'>
                    <img src="/img/header_logo.png" alt="チーズアカデミーのヘッダーロゴ" />
                    <div className='header-link'>
                        <a href="#about">ABOUT</a>
                        <a href="#course">COURSE</a>
                        <a href="#news">NEWS</a>
                        <a href="#access">ACCESS</a>
                        <a href="#contact">CONTACT</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header