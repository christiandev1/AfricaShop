import React from 'react';

import {StarRating} from './StarRating';


const productImages = {
    jewellery1:  require('../assets/images/products/jewellery-1.jpg'),
    shampoo: require('../assets/images/products/shampoo.jpg'),
};

const ProductFeatured = (props) => {

    const { data } = props;

    return (
        <div>
            
            <div className="product-featured">

                <h2 className="title">{data.title}</h2>

                <div className="showcase-wrapper has-scrollbar">
                
                {
                    data.content.map((item) => {
                        return <ProductFeaturedItem item={item} />;
                    })
                }

                </div>
            </div>
        </div>
    )
}

const ProductFeaturedItem = (props) => {

    const { item } = props;

    return (
        <div className="showcase-container">

            <div className="showcase">
            
                <div className="showcase-banner">
                    <img src={productImages[item.imageId]} alt={item.title} className="showcase-img" />
                </div>

                <div className="showcase-content">
                    
                    <StarRating activeStars={item.rate_value} />

                    <a href="/">
                    <h3 className="showcase-title">{item.title}</h3>
                    </a>

                    <p className="showcase-desc">
                        {item.desc}
                    </p>
                    
                    <div className="price-box">
                        <p className="price">{item.price}</p>

                        <del>{item.del_price}</del>
                    </div>

                    <button className="add-cart-btn">add to cart</button>

                    <div className="showcase-status">
                        <div className="wrapper">
                            <p>
                                already sold: <b>{item.sold}</b>
                            </p>

                            <p>
                                available: <b>{item.available}</b>
                            </p>
                        </div>

                        <div className="showcase-status-bar"></div>
                    </div>

                    <div className="countdown-box">

                        <p className="countdown-desc">
                            {item.countdown.desc}
                        </p>

                        <div className="countdown">
                            {
                                item.countdown.content.map((elt) => {
                                    return <div className="countdown-content">
                                                <p className="display-number">{elt.number}</p>
                                                <p className="display-text">{elt.text}</p>
                                            </div>
                                })
                            }

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductFeatured;