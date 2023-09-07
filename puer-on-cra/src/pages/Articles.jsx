import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'


function Articles() {
 
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <Helmet>
        <title>Каталог | Купити Шу, Шен Пуер. Купити посуд для заварювання чаю Шу, Шен, Да Хун Пао.</title>
        <meta name="description" content="Teamaster - твій чайний майстер. Чай Пуер, Шу Пуер, Шен Пуер. Посуд для заварювання чаю." data-rh="true"/>
        <meta name="keywords" content="Купить, Купити, Чай Пуер, Шу Пуер, Шен Пуер, Посуд для заварювання чаю" />
        <link rel='canonical' href='/catalog' />
    </Helmet>
    <section className='articles-section'>
        <div className="articles__container">
            <div className="articles-block">
                <h2>Статті</h2>
                <div className="articles-body">
                    {/* <NavLink to="about-shu" className="atricles-card-body"> */}
                      <div className="articles-card">
                          <img src="../img/about3_cup.jpg" alt="Про Шу" />
                          <div className="articles-card-desc">
                              <h1>Про Шу</h1>
                          </div>
                      </div>
                    {/* </NavLink> */}
                    {/* <NavLink to="about-shen" className="atricles-card-body"> */}
                      <div className="articles-card">
                          <img src="../img/about2_shen.jpg" alt="Про Шу" />
                          <div className="articles-card-desc">
                              <h1>Про Посуд</h1>
                          </div>
                      </div>
                    {/* </NavLink> */}
                    {/* <NavLink to="about-dishes" className="atricles-card-body"> */}
                      <div className="articles-card">
                          <img src="../img/about_cup_dishes.jpg" alt="Про Шу" />
                          <div className="articles-card-desc">
                              <h1>Про Заварювання</h1>
                          </div>
                      </div>
                    {/* </NavLink> */}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Articles
