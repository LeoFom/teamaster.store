import { useState, useEffect, useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { ProductContext } from '../context'
import { Helmet } from 'react-helmet-async'

function Catalog() {
    const {changeProduct, setChangeProduct} = useContext(ProductContext)
    const [filter, setFilter] = useState(true)
    
 
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <>
    <Helmet>
        <title>Каталог | Купити Шу, Шен Пуер, Да Хун Пао, посуд для заварювання чаю.</title>
        <meta name="description" content="Teamaster - твій чайний майстер. Чай Пуер, Шу Пуер, Шен Пуер, Да Хун Пао. Посуд для заварювання чаю Шу, Шен, Да Хун Пао." data-rh="true"/>
        <meta name="keywords" content="Купить, Купити, Чай Пуер, Шу Пуер, Шен Пуер, Да Хун Пао. Посуд для заварювання чаю" />
        <link rel='canonical' href={changeProduct  ? ('/catalog/tea') : ('/catalog/dishes')} />
    </Helmet>
    <main id="main-block">
        <div className="main__container">
            <section className="main-catalog">
                <div className="main-header">
                    <div className="catalog-products-title">
                        <div className="catalog-pr-title">
                            <h3>Наші продукти</h3>
                        </div>
                        <div className="catalog-products-line">
                            <div className="catalog-pr-line">

                            </div>
                        </div>
                        <div className="catalog-products-category">
                            <NavLink to="catalog/tea" onClick={() => {setChangeProduct(true)}} id="product-1" className={changeProduct ? "active" : ""}>Чай</NavLink>
                            <NavLink to="catalog/dishes" onClick={() => {setChangeProduct(false)}} id="product-2" className={changeProduct ? "" : "active"}>Посуд</NavLink>
                        </div>
                    </div>
                </div>
                <div className="catalog-body">
                    <div className="catalog-left">
                        <div className="catalog-left-body">
                            {changeProduct ? (
                                <div className="catalog-product-body">
                                    <div id="catalog-left-1" className="catalog-left-option">
                                        <h3>Puer</h3>
                                        <div className="catalog-option">
                                            <input type="checkbox"/>
                                            <span>Чорний Puer</span>
                                        </div>
                                        <div className="catalog-option">
                                            <input type="checkbox"/>
                                            <span>Зелений Puer</span>
                                        </div>
                                    </div>
                                    <div id="catalog-left-1" className="catalog-left-option">
                                        <h3>Улун</h3>
                                        <div className="catalog-option">
                                            <input type="checkbox"/>
                                            <span>Да Хун Пао</span>
                                        </div>
                                    </div>
                                </div>
                                ):(
                                <div className="catalog-product-body">
                                    <div id="catalog-left-2" className="catalog-left-option">
                                        <div className="catalog-option-body">
                                            <h3>Посуд</h3>
                                            <div className="catalog-option">
                                                <input type="checkbox"/>
                                                <span>Для чотирьох</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )}
                        </div>
                    </div>

                    <div className="catalog-top-tablet-button">
                        <div className="catalog-top-button-block">
                            <div id='catalog-top-sort' className="catalog-top-button">
                                <span className='top-button'>Сортировка</span>
                            </div>
                            <div onClick={() => setFilter(!filter)} id='catalog-top-filter' className="catalog-top-button">
                                <span className='top-button'>Фільтр</span>
                            </div>
                        </div>
                    </div>
                    <Outlet/>
                </div>
            </section>
        </div>
    </main>
    </>
  )
}

export default Catalog


