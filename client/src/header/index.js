import React from 'react';

const Header = () => {
    return (
    <header class="main-header">
        <a href="#" class="brand-logo">
        <img src="images/logo.gif" alt="Hacker News Logo" alt="Hacker News Logo">
        </a>
        <div class="header-menu">
        <span class="logo-text">Hacker News</span>
        <a class="menu-item" href="#">new</a>
        <a href="#" class="menu-item">past</a>
        <a href="#" class="menu-item">comments</a>
        <a href="#" class="menu-item">ask</a>
        <a href="#" class="menu-item">show</a>
        <a href="#" class="menu-item">jobs</a>
        <a href="#" class="menu-item">submit</a>
        </div>
        <a href="#" class="auth">login</a>
    </header>
    )
};

export default Header;
