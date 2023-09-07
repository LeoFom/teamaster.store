import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import React from 'react'


function Header() {
    const [opacity, setOpacity] = useState(true)
    const [menuBar, setMenuBar] = useState(true)
  return (
    <>
    <div className="header">
        <div disabled={true} className={`message ${opacity ? "opacity":""}`} >
            <div disabled={true} className="message-block" onClick={() => setOpacity(!opacity)}>
                <div className="message-title">
                    <h3>Сайт у розробці</h3>
                    <h4>
                        Зробити замовлення - 095 720 1860  
                    </h4>
                </div>
                <div className="message-close" onClick={() => setOpacity(!opacity)}>
                    <h4>
                        Закрити     
                    </h4>
                </div>
            </div>
        </div>
        <div className="header__container">
            <div className="header-body">
                <div className="header-left left">
                    <NavLink to="/">
                        <img width={30} src="/img/logo.PNG" alt="logo" />    
                    </NavLink>
                </div>

                <div className="header-cener center">
                    <NavLink to="catalog/tea">Каталог</NavLink>
                    <NavLink to="articles">Статті</NavLink>
                </div>
                <div className="header-right right">
                    <div onClick={() => setOpacity(!opacity)}><img src="../../img/icons8-search.svg" alt=""/></div>
                    <div onClick={() => setOpacity(!opacity)}>
                        <img src="../../img/icons8-cart2-32.png" alt=""/>
                    </div>
                </div>
                <div onClick={() => setMenuBar(!menuBar)} id="menu" className="menu">
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                </div>
                <div id="menu-open" className={`menu-back ${menuBar ? "close" : ""}`}>
                    <div onClick={() => setMenuBar(!menuBar)} id="menu-close" className="menu-close">
                        <div className="menu-close-line"></div>
                        <div className="menu-close-line"></div>
                    </div>
                    <div className="menu-body">
                        <h3>
                            <NavLink to="catalog/tea" onClick={() => setMenuBar(!menuBar)}>Каталог</NavLink>
                        </h3>
                        <h3>
                            <NavLink to="articles" onClick={() => setMenuBar(!menuBar)}>Статті</NavLink>
                        </h3>
                        <h3>
                            <NavLink to="tel:+380957201860" itemProp="telephone">Подзвонити</NavLink>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header
