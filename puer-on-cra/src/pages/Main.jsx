import { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../context'
import { Helmet } from 'react-helmet-async'
// import { ProductContext } from "../context.jsx";


function Main() {
    const {tea, dishes, changeProduct, setChangeProduct, setProductId} = useContext(ProductContext)
 
  useEffect(() => {
    // window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
    <Helmet>
        <title>Teamaster | Твій чайний майстер</title>
        <meta name="description" content="Teamaster - твій чайний майстер. Чай Пуер, Шу Пуер, Шен Пуер. Посуд для заварювання чаю." data-rh="true"/>
        <meta name="keywords" content="Купить, Купити, Чай Пуер, Шу Пуер, Шен Пуер, Посуд для заварювання чаю" />
        <link rel='canonical' href="teamaster.store/" />
    </Helmet>
    <ProductContext.Provider value={tea}>    
        <main className="main">
            <section>
                <div className="first">
                <div className="main__container">
                    <div id='main-info' className="first-left">
                        <div className="main-info-img">
                            <img id='main-img' src="/img/variablePhoto/1.jpg" alt="pu"/>
                        </div>
                        <h1>
                            {/* Pu'erh */}
                            Tea master
                        </h1>
                        <h2>
                            Смак, що треба
                        </h2>
                        <span>
                            Чай пуер - це келих збагаченої історії та спокою,<br/> що занурює вас у світ китайської чайної культури <br/> Він витворяє магію, переносить вас у глибини традиції<br/> та дарує відчуття зв'язку з минулим. 
                        </span>
                        <div className="buttons">
                            <NavLink to="catalog/tea" className="btn main-btn-one">Подивитись каталог</NavLink>
                            <NavLink to="tel:+380957201860" itemProp="telephone" className="btn main-btn-two">Подзвонити</NavLink>
                        </div>
                        <div className="first-info">
                            <div className="info-element">
                                <span>Наші продукти</span>
                                <h4>+100</h4>
                            </div>
                            <div className="info-element">
                                <span>Вже продано</span>
                                <h4>+9k</h4>
                            </div>
                            <div className="info-element">
                                <span>Наш досвід</span>
                                <h4>+3 роки</h4>
                            </div>
                        </div>
                    </div>
                    <img className='first-main-img' src="/img/articlesPhoto/1002.jpg" alt="pu"/>
                    {/* <img className='first-main-img' src="/img/variablePhoto/1.jpg" alt="pu"/> */}
                </div>
                </div>
            </section>
                
            <section className='line'>
                <div className='line-body'>
                    <div className="main-line">
                        <div className="line-el">
                            <span>P</span>
                            <span>u</span>
                            <span>'</span>
                            <span>e</span>
                            <span>r</span>
                            <span>h</span>
                        </div>
                        <div className="line-el">
                            <span>P</span>
                            <span>u</span>
                            <span>'</span>
                            <span>e</span>
                            <span>r</span>
                            <span>h</span>
                        </div>
                        <div className="line-el">
                            <span>P</span>
                            <span>u</span>
                            <span>'</span>
                            <span>e</span>
                            <span>r</span>
                            <span>h</span>
                        </div>
                        <div className="line-el">
                            <span>P</span>
                            <span>u</span>
                            <span>'</span>
                            <span>e</span>
                            <span>r</span>
                            <span>h</span>
                        </div>
                        <div className="line-el">
                            <span>P</span>
                            <span>u</span>
                            <span>'</span>
                            <span>e</span>
                            <span>r</span>
                            <span>h</span>
                        </div>
                        <div className="line-el">
                            <span>P</span>
                            <span>u</span>
                            <span>'</span>
                            <span>e</span>
                            <span>r</span>
                            <span>h</span>
                        </div>
                    </div>
                </div>
            </section>
                <section className='second'>
                    <div className="second-body main__container">
                        
                        <div className="second-el">
                            <div className="second-el-img">
                                <img src="img/articlesPhoto/1001.jpg" alt="1"/>
                            </div>
                            <div className="second-el-text">
                                <h3>Pu'erh</h3>
                                {/* <NavLink to="articles/">Дізнатись більше</NavLink> */}
                            </div>
                        </div>
                        <div className="second-el">
                            <div className="second-el-img">
                                <img src="img/articlesPhoto/1002.jpg" alt="1"/>
                            </div>
                            <div className="second-el-text">
                                <h3>Посуд для чаю</h3>
                                {/* <NavLink to="articles/about-dishes">Дізнатись більше</NavLink> */}
                            </div>
                        </div>
                        <div className="second-el">
                            <div className="second-el-img">
                                <img src="img/articlesPhoto/1003.jpg" alt="1"/>
                            </div>    
                            <div className="second-el-text">
                                <h3>Посуд для чаю</h3>
                                {/* <NavLink to="articles/about-dishes">Дізнатись більше</NavLink> */}
                            </div>
                        </div>
                        <div className="second-el">
                            <div className="second-el-img">
                                <img src="img/articlesPhoto/1004.jpg" alt="1"/>
                            </div>
                            <div className="second-el-text">
                                <h3>Посуд для чаю</h3>
                                {/* <NavLink to="articles/about-dishes">Дізнатись більше</NavLink> */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section>
                <div className="main__container">
                    <div className="about-products">
                        <div className="products-el">
                            <div className="product-el">
                                <div className="product-ico">
                                    <img src="img/icons8-phone_opacity.png" alt="one"/>
                                </div>
                                <div className="product-text">
                                    <h4>Безкоштовна</h4><span>консультація</span>
                                </div>
                            </div>
                            <div className="product-el">
                                <div className="product-ico">
                                    <img src="img/icons8-speed.png" alt="one"/>
                                </div>
                                <div className="product-text">
                                    <h4>Швидке</h4><span>замовлення</span>
                                </div>
                            </div>
                            <div className="product-el">
                                <div className="product-ico">
                                    <img src="img/icons8-first.png" alt="one"/>
                                </div>
                                <div className="product-text">
                                    <h4>Якість</h4><span>на першому місці</span>
                                </div>
                            </div>
                            <div className="product-el">
                                <div className="product-ico">
                                    <img src="img/icons8-coast.png" alt="one"/>
                                </div>
                                <div className="product-text">
                                    <h4>Приємні</h4><span>ціни</span>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
                </section> */}

                <section className='products'>
                    <div className="main__container">
                    <div id="products" className="our-products">
                        <div className="products-block">
                            <div className="products-title">
                                <div className="pr-title">
                                    <h3>Наші продукти</h3>
                                </div>
                                <div className="products-line">
                                    <div className="pr-line">

                                    </div>
                                </div>
                                <div className="products-category">
                                    <span onClick={() => {setChangeProduct(true)}} id="product-1" className={changeProduct ? ("active"):("")}>Pu'erh</span>
                                    <span onClick={() => {setChangeProduct(false)}} id="product-2" className={changeProduct ? (""):("active")}>Посуд</span>
                                </div>
                            </div>
                            
                            {
                                changeProduct ? (
                                    <div id="product-block-1" className="products-card-block">
                                        {
                                            tea 
                                            ? (tea.slice(0,8).map((product,id) => (
                                                <NavLink key={id} onClick={()=>setProductId(id+1)} to={`catalog/tea/${product.url}`}>
                                                    <div  className="product-card">
                                                        <div className="product-img">
                                                            <img src={product.src} alt="1"/>
                                                        </div>
                                                        <div className="product-description">
                                                            <span>{product.count ? ("Є в наявності"):("Немає в наявності")}</span>
                                                            <h2>{product.name}</h2>
                                                            <h3>{product.price}</h3>
                                                        </div>
                                                        <div className="product-do">
                                                            <div className="product-do-cart">
                                                                <img src="img/icons8-cart-48-gray.png" alt="1" />
                                                            </div>
                                                            <div className="product-do-like">
                                                                <img src="img/heart.svg" alt="1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            ))) :
                                            (null) 
                                        }    
                                    </div>
                                ):(
                                    <div id="product-block-2" className="products-card-block">
                                        {
                                            dishes 
                                            ? (dishes.map((dish,id) => (   
                                                <NavLink key={id} onClick={()=>setProductId(id+1)} to={`catalog/dishes/${dish.url}`}>
                                                    <div className="product-card">
                                                        <div className="product-img">
                                                            <img src={dish.src} alt="1"/>
                                                        </div>
                                                        <div className="product-description">
                                                            <span>{dish.count ? ("Є в наявності"):("Немає в наявності")}</span>
                                                            <h2>{dish.name}</h2>
                                                            <h3>{dish.price}</h3>
                                                        </div>
                                                        <div className="product-do">
                                                            <div className="product-do-cart">
                                                                <img src="img/icons8-cart-48-gray.png" alt="1" />
                                                            </div>
                                                            <div className="product-do-like">
                                                                <img src="img/heart.svg" alt="1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                                ))
                                            ) : (null)
                                        }
                                    </div>
                                )
                            }
                            <div className="product-bottom">
                                    <div>
                                    <div className="btn product-bottom-btn">
                                        <NavLink className="product-bottom-block" to={changeProduct ? "catalog/tea": "catalog/dishes"}>
                                            <h3>{"Перейти до каталогу -\>"}</h3>
                                        </NavLink>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </section>

                <section>
                    <div className="main__container">
                    <div className="about-puer">
                        <div className="about-puer-block">
                            <div className="about-puer-img">
                                <img src="img/pu_er.png" alt="5"/>
                            </div>
                            <div className="text-block text-one">
                                <h3>Допомагає зосереджуватися, <br/>Cтимулює мозок думати</h3>
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>
                            <div className="text-block text-two">
                                <h3>Укріплює імунітет, <br/>підвищує стресостійкість</h3>
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>
                            <div className="text-block text-three">
                                <h3>Поліпшує травлення<br/>і має тонизуючий еффект </h3>
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>
                            <div className="text-block text-four">
                                <h3>Прискорює обмін речовин,<br/>Cприяє зниженню ваги</h3>
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            {/* </div> */}
        </main>
    </ProductContext.Provider> 
    </>
  )
}

export default Main 
