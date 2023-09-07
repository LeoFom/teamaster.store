import { useState, useEffect, createContext, useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { ProductContext } from '../context'

function AboutProduct() {
    const {tea, dishes, changeProduct, productId} = useContext(ProductContext)
    const element = tea[productId]

    
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <Helmet>
        <title>            
            {`Каталог | ${element.name}`}            
        </title>
        <meta name="description" content={element.description + (element.description2 ? element.description2 : "") + (element.description3 ? element.description3 : "") + (element.description4 ? element.description4 : "") + (element.description5 ? element.description5 : "") } data-rh="true"/>
        <meta name="keywords" content={"Купить, Купити, Чай Пуер, Шу Пуер, Шен Пуер, Посуд для заварювання чаю, " + element.url} />
        <link rel='canonical' href={window.location} />
        <meta property="og:url" content={window.location} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={element.name} />
        <meta property="og:description" content={element.description} />
        <meta property="og:image" content={"teamaster.store" + element.src} /> 
    </Helmet>
    <section className='about-section'>
        <div className="about__container">
            <div className="about-product-block">
                <div className="about-product-img">
                    <div className="about-product-main-img">
                        <img src={element.src} alt="1"/>
                    </div>
                    <div className="about-product-second-img">
                        <button value='P'>&#8592;</button>
                        <img src={element.src} alt="1"/>
                        <img id='about-two-img' src={element.src} alt="1"/>
                        <img src={element.src} alt="1"/>
                        <button value='N'>&#8594;</button>
                    </div>
                </div>

                <div className="about-product-information">
                    <div className="about-product-text">
                        <div className="about-product-title">
                            <h1>{`${element.name}`}</h1>
                        </div>
                        <div className="about-product-price">
                            <h2>{element.price}</h2>
                        </div>
                        <div className="about-product-description">
                            <h3>
                                Опис:
                            </h3>
                            <h4>{element.description}
                                <p>{element.description2 && (element.description2)}</p>
                                <p>{element.description3 && (element.description3)} </p>
                                <p>{element.description4 && (element.description4)} </p>
                                <p>{element.description5 && (element.description5)} </p>
                            </h4>
                        </div>
                    </div>
                    <div className="about-product-buttons">
                        <div className="about-buttons-in-cart">
                            <input className="inp" defaultValue={1} min="1" max={element.count} type="number"/>
                            <button className="btn">Додати до корзини</button>
                            <img src="/img/heart.svg" alt="1"/>
                        </div>
                        <div className="about-product-is">
                            <h5>В наявності: </h5>
                            <h4>{element.count}</h4>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="about-code-product">
                            <h5>Код товару:</h5>
                            <h4>{element.id < 10 ? `P100${element.id}` : `P10${element.id}`}</h4>
                        </div>
                        <div className="about-code-product-tag">
                            <span>Теги:</span>
                            <div className="about-tag-name-block">
                                {
                                    // element.tag.map((tag)=>{
                                    //     <div className="about-teg-name">
                                    //         <h2>{tag}</h2>
                                    //         <span>,</span>
                                    //     </div>
                                    // })
                                }
                                {/* <div className="about-teg-name">
                                    <h2>{el.tag}</h2>
                                    <span>,</span>
                                </div>
                                <div className="about-teg-name">
                                    <h2>Смачний чай</h2>
                                    <span>,</span>
                                </div>
                                <div className="about-teg-name">
                                    <h2>Ароматний чай</h2>
                                    <span>,</span>
                                </div>
                                <div className="about-teg-name">
                                    <h2>Пуєр чай</h2>
                                    <span>,</span>
                                </div>
                                <div className="about-teg-name">
                                    <h2>Чорний чай</h2>
                                    <span>,</span>
                                </div> */}
                            </div>                           
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default AboutProduct
