import { useState, useContext } from "react"
import { NavLink, useLoaderData, useParams } from "react-router-dom"
import { ProductContext } from "../context"


function CatalogElements() {
    const {tea, dishes, changeProduct, setProductId} = useContext(ProductContext)

    return(
    <>
    
    {
    changeProduct ? 
    (
    <div id="product-block-1" className="catalog-card-block">
    {
        tea ? (
            (tea.map((element, id) => (
                <NavLink onClick={()=>setProductId(id+1)} id={id} key={id} to={`catalog/tea/${element.url}`}>
                    <div  className="catalog-product-card">
                        <div className="catalog-product-img">
                            <img src={element.src} alt="1"/>
                        </div>
                        <div className="catalog-product-description">
                            <span>{element.count >0 ? "Є в наявності": "Немає в наявності"}</span>
                            <h2>{element.name}</h2>
                            <h3>{element.price}</h3>
                        </div>
                        <div className="catalog-product-do">
                            <div className="catalog-product-do-cart">
                                <img src="/img/icons8-cart-48-gray.png" alt="1" />
                            </div>
                            <div className="catalog-product-do-like">
                                <img src="/img/heart.svg" alt="1"/>
                            </div>
                        </div>
                    </div>
                </NavLink>
            )))): (() => {console.log("Fake tea element")})
    }    
    </div>
    ) 
    : 
    (
        <div id="product-block-2" className="catalog-card-block">
            {
                dishes 
                ? (dishes.map((dish,id) => ( 
                    <NavLink onClick={()=>setProductId(id+1)} id={id} key={id} to={`catalog/dishes/${id+1}`}>
                        <div key={id} className="catalog-product-card">
                            <div className="catalog-product-img">
                                <img src={dish.src} alt="1"/>
                            </div>
                            <div className="catalog-product-description">
                                <span>{dish.count >0 ? "Є в наявності": "Немає в наявності"}</span>
                                <h2>{dish.name}</h2>
                                <h3>{dish.price}</h3>
                            </div>
                            <div className="catalog-product-do">
                                <div className="catalog-product-do-cart">
                                    <img src="/img/icons8-cart-48-gray.png" alt="1" />
                                </div>
                                <div className="catalog-product-do-like">
                                    <img src="/img/heart.svg" alt="1"/>
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
    </>

  )
}

export default CatalogElements

