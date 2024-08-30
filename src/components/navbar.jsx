import React from 'react';
import hamburger from '../assets/hamburger.svg';
import search from '../assets/search.svg';
import bell from '../assets/bell.svg';
import sms from '../assets/sms.svg';
import dropArrow from '../assets/drop-arrow.svg';
import avatar from '../assets/avatar.svg';

import style from './css/navbar.module.css'

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.searchBar}>
                <input type="text" placeholder="Search" className={style.searchInput} />
                <img src={search} alt="Search Icon" className={style.searchIcon} />
            </div>
            <div className={style.box1}>
                <img src={hamburger} alt="Hamburger Menu" />
                <img src={search} alt="Search Icon" />
            </div>
            <div className={style.box2}>
                <img src={bell} alt="Notifications" />
                <img src={sms} alt="Messages" />
                <div>
                    <div className={style.user}>
                        <img src={avatar} alt="avatar" />
                        <p>Jay Surya</p>
                        <img src={dropArrow} alt="Dropdown Arrow" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
