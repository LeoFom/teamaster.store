import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import React from 'react'

function Footer() {

  return (
    <>
    <footer>
        <div className="footer__container">
            <div className="footer-block">
                <div  className="footer-left">
                    <div className="footer-contact">
                        <h2>Контакти</h2>
                        <h4>+38(095)720-18-60</h4>
                        <h4>l.fomenko003@gmail.com</h4>
                        <h4>З 7:00 до 23:00</h4>
                    </div>
                    <div className="services">
                        <h2>Сторінки</h2>
                        {/* <h4><NavLink to="/">Магазин</NavLink></h4> */}
                        {/* <h4><NavLink to="catalog/tea">Продукти</NavLink></h4> */}
                        {/* <h4><NavLink to="articles">Інформація про чай</NavLink></h4> */}
                    </div>
                </div>

                <div id='footer-social' className="footer-right">
                    <div className="footer-social">
                        <h2>Соціальні мережі</h2>
                        <div className="social-icons">
                            {/* <NavLink to="https://www.facebook.com/"><img src="../../img/icons8-facebook.svg" alt="1"/></NavLink> */}
                            {/* <NavLink to="https://www.instagram.com/teamaster_if"><img src="../../img/icons8-instagram.svg" alt="1"/></NavLink> */}
                            {/* <NavLink to="https://www.tiktok.com/"><img src="../../img/icons8-tiktok.svg" alt="1"/></NavLink> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-body">
                <div className="footer-bottom-el">
                    <h4>v1.1002</h4>
                    <h4>Copyright &copy; 2022, Puerh.com</h4>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer


