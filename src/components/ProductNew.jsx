import React from 'react';

import {StarRating} from './StarRating';

const productImages = {
    jacket3:  require('../assets/images/products/jacket-3.jpg'),
    jacket4: require('../assets/images/products/jacket-4.jpg'),
    shirt1: require('../assets/images/products/shirt-1.jpg'),
    shirt2: require('../assets/images/products/shirt-2.jpg'),
    jacket5: require('../assets/images/products/jacket-5.jpg'),
    jacket6: require('../assets/images/products/jacket-6.jpg'),
    clothes3: require('../assets/images/products/clothes-3.jpg'),
    clothes4: require('../assets/images/products/clothes-4.jpg'),
    shoe2: require('../assets/images/products/shoe-2.jpg'),
    shoe2_1: require('../assets/images/products/shoe-2_1.jpg'),
    watch3: require('../assets/images/products/watch-3.jpg'),
    watch4: require('../assets/images/products/watch-4.jpg'),
    watch1: require('../assets/images/products/watch-1.jpg'),
    watch2: require('../assets/images/products/watch-2.jpg'),
    partywear1: require('../assets/images/products/party-wear-1.jpg'),
    partywear2: require('../assets/images/products/party-wear-2.jpg'),
    jacket1: require('../assets/images/products/jacket-1.jpg'),
    jacket2: require('../assets/images/products/jacket-2.jpg'),
    sports2: require('../assets/images/products/sports-2.jpg'),
    sports4: require('../assets/images/products/sports-4.jpg'),
    shoe1: require('../assets/images/products/shoe-1.jpg'),
    shoe1_1: require('../assets/images/products/shoe-1_1.jpg'),
    shorts1: require('../assets/images/products/shorts-1.jpg'),
    shorts2: require('../assets/images/products/shorts-2.jpg'),
};

const ProductNew = (props) => {
    const {data} = props;

    return (

        <div className="product-main">

            <h2 className="title">{data.title}</h2>

            <div className="product-grid">
                {
                    data.content.map((item, key) => {
                        return <NewProductItem item={item} />
                    })
                }

                {/* <div className="showcase">
                
                    <div className="showcase-banner">
                    <img src={shirt1} alt="Pure Garment Dyed Cotton Shirt" className="product-img default"
                        width="300" />
                    <img src={shirt2} alt="Pure Garment Dyed Cotton Shirt" className="product-img hover"
                        width="300" />
                
                    <p className="showcase-badge angle black">sale</p>
                
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                    </div>
                
                    <div className="showcase-content">
                    <a href="/" className="showcase-category">shirt</a>
                
                    <h3>
                        <a href="/" className="showcase-title">Pure Garment Dyed Cotton Shirt</a>
                    </h3>
                
                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                
                    <div className="price-box">
                        <p className="price">$45.00</p>
                        <del>$56.00</del>
                    </div>
                
                    </div>
                
                </div>

                <div className="showcase">
                
                    <div className="showcase-banner">
                    <img src={jacket5} alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img default"
                        width="300" />
                    <img src={jacket6} alt="MEN Yarn Fleece Full-Zip Jacket" className="product-img hover"
                        width="300" />
                
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                    </div>
                
                    <div className="showcase-content">
                    <a href="/" className="showcase-category">Jacket</a>
                
                    <h3>
                        <a href="/" className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</a>
                    </h3>
                
                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                
                    <div className="price-box">
                        <p className="price">$58.00</p>
                        <del>$65.00</del>
                    </div>
                
                    </div>
                
                </div>

                <div className="showcase">
                
                    <div className="showcase-banner">
                    <img src={clothes3} alt="Black Floral Wrap Midi Skirt" className="product-img default"
                        width="300" />
                    <img src={clothes4} alt="Black Floral Wrap Midi Skirt" className="product-img hover"
                        width="300" />
                
                    <p className="showcase-badge angle pink">new</p>
                
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                    </div>
                
                    <div className="showcase-content">
                    <a href="/" className="showcase-category">skirt</a>
                
                    <h3>
                        <a href="/" className="showcase-title">Black Floral Wrap Midi Skirt</a>
                    </h3>
                
                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                
                    <div className="price-box">
                        <p className="price">$25.00</p>
                        <del>$35.00</del>
                    </div>
                
                    </div>
                
                </div>

                <div className="showcase">
                
                    <div className="showcase-banner">
                    <img src={shoe2} alt="Casual Men's Brown shoes" className="product-img default"
                        width="300" />
                    <img src={shoe2_1} alt="Casual Men's Brown shoes" className="product-img hover"
                        width="300" />
                
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                    </div>
                
                    <div className="showcase-content">
                    <a href="/" className="showcase-category">casual</a>
                
                    <h3>
                        <a href="/" className="showcase-title">Casual Men's Brown shoes</a>
                    </h3>
                
                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                
                    <div className="price-box">
                        <p className="price">$99.00</p>
                        <del>$105.00</del>
                    </div>
                
                    </div>
                
                </div>

                <div className="showcase">
                
                    <div className="showcase-banner">
                    <img src={watch3} alt="Pocket Watch Leather Pouch" className="product-img default"
                        width="300" />
                    <img src={watch4} alt="Pocket Watch Leather Pouch" className="product-img hover"
                        width="300" />
                
                    <p className="showcase-badge angle black">sale</p>
                
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                    </div>
                
                    <div className="showcase-content">
                    <a href="/" className="showcase-category">watches</a>
                
                    <h3>
                        <a href="/" className="showcase-title">Pocket Watch Leather Pouch</a>
                    </h3>
                
                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                
                    <div className="price-box">
                        <p className="price">$150.00</p>
                        <del>$170.00</del>
                    </div>
                
                    </div>
                
                </div>

                <div className="showcase">
                
                    <div className="showcase-banner">
                    <img src={watch1} alt="Smart watche Vital Plus" className="product-img default"
                        width="300" />
                    <img src={watch2} alt="Smart watche Vital Plus" className="product-img hover" width="300" />
                
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                    </div>
                
                    <div className="showcase-content">
                    <a href="/" className="showcase-category">watches</a>
                
                    <h3>
                        <a href="/" className="showcase-title">Smart watche Vital Plus</a>
                    </h3>
                
                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                
                    <div className="price-box">
                        <p className="price">$100.00</p>
                        <del>$120.00</del>
                    </div>
                
                    </div>
                
                </div>

                <div className="showcase">
                
                    <div className="showcase-banner">
                    <img src={partywear1} alt="Womens Party Wear Shoes" className="product-img default"
                        width="300" />
                    <img src={partywear2} alt="Womens Party Wear Shoes" className="product-img hover"
                        width="300" />
                
                    <p className="showcase-badge angle black">sale</p>
                
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                    </div>
                
                    <div className="showcase-content">
                    <a href="/" className="showcase-category">party wear</a>
                
                    <h3>
                        <a href="/" className="showcase-title">Womens Party Wear Shoes</a>
                    </h3>
                
                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                
                    <div className="price-box">
                        <p className="price">$25.00</p>
                        <del>$30.00</del>
                    </div>
                
                    </div>
                
                </div>

                <div className="showcase">
                
                    <div className="showcase-banner">
                    <img src={jacket1} alt="Mens Winter Leathers Jackets" className="product-img default"
                        width="300" />
                    <img src={jacket2} alt="Mens Winter Leathers Jackets" className="product-img hover"
                        width="300" />
                
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                    </div>
                
                    <div className="showcase-content">
                    <a href="/" className="showcase-category">jacket</a>
                
                    <h3>
                        <a href="/" className="showcase-title">Mens Winter Leathers Jackets</a>
                    </h3>
                
                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                
                    <div className="price-box">
                        <p className="price">$32.00</p>
                        <del>$45.00</del>
                    </div>
                
                    </div>
                
                </div>

                <div className="showcase">
                
                    <div className="showcase-banner">
                    <img src={sports2} alt="Trekking & Running Shoes - black" className="product-img default"
                        width="300" />
                    <img src={sports4} alt="Trekking & Running Shoes - black" className="product-img hover"
                        width="300" />
                
                    <p className="showcase-badge angle black">sale</p>
                
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                    </div>
                
                    <div className="showcase-content">
                    <a href="/" className="showcase-category">sports</a>
                
                    <h3>
                        <a href="/" className="showcase-title">Trekking & Running Shoes - black</a>
                    </h3>
                
                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                
                    <div className="price-box">
                        <p className="price">$58.00</p>
                        <del>$64.00</del>
                    </div>
                
                    </div>
                
                </div>

                <div className="showcase">
                
                    <div className="showcase-banner">
                    <img src={shoe1} alt="Men's Leather Formal Wear shoes" className="product-img default"
                        width="300" />
                    <img src={shoe1_1} alt="Men's Leather Formal Wear shoes" className="product-img hover"
                        width="300" />
                
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                    </div>
                
                    <div className="showcase-content">
                    <a href="/" className="showcase-category">formal</a>
                
                    <h3>
                        <a href="/" className="showcase-title">Men's Leather Formal Wear shoes</a>
                    </h3>
                
                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                
                    <div className="price-box">
                        <p className="price">$50.00</p>
                        <del>$65.00</del>
                    </div>
                
                    </div>
                
                </div>

                <div className="showcase">
                
                    <div className="showcase-banner">
                    <img src={shorts1} alt="Better Basics French Terry Sweatshorts"
                        className="product-img default" width="300" />
                    <img src={shorts2} alt="Better Basics French Terry Sweatshorts"
                        className="product-img hover" width="300" />
                
                    <p className="showcase-badge angle black">sale</p>
                
                    <div className="showcase-actions">
                        <button className="btn-action">
                        <ion-icon name="heart-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="eye-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="repeat-outline"></ion-icon>
                        </button>
                
                        <button className="btn-action">
                        <ion-icon name="bag-add-outline"></ion-icon>
                        </button>
                    </div>
                    </div>
                
                    <div className="showcase-content">
                    <a href="/" className="showcase-category">shorts</a>
                
                    <h3>
                        <a href="/" className="showcase-title">Better Basics French Terry Sweatshorts</a>
                    </h3>
                
                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                
                    <div className="price-box">
                        <p className="price">$78.00</p>
                        <del>$85.00</del>
                    </div>
                
                    </div>
                
                </div> */}

            </div>

        </div>

    )
}

const NewProductItem = (props) => {
    const {item} = props;
    const badge = getProductBadge(item);

    return (
        <div className="showcase">

            <div className="showcase-banner">

            <img src={productImages[item.imageId_default]} alt="Mens Winter Leathers Jackets" width="300" className="product-img default" />
            <img src={productImages[item.imageId_hover]} alt="Mens Winter Leathers Jackets" width="300" className="product-img hover" />
            
            {badge}
            
            <div className="showcase-actions">

                <button className="btn-action">
                <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button className="btn-action">
                <ion-icon name="eye-outline"></ion-icon>
                </button>

                <button className="btn-action">
                <ion-icon name="repeat-outline"></ion-icon>
                </button>

                <button className="btn-action">
                <ion-icon name="bag-add-outline"></ion-icon>
                </button>

            </div>

            </div>

            <div className="showcase-content">

            <a href="/" className="showcase-category">{item.category}</a>

            <a href="/">
                <h3 className="showcase-title">{item.title}</h3>
            </a>

            <StarRating activeStars={item.rate_value} />

            <div className="price-box">
                <p className="price">{item.price}</p>
                <del>{item.del_price}</del>
            </div>

            </div>

        </div>
    )
};

const getProductBadge = (elt) => {
    if( elt.discount )
        return <p className="showcase-badge">{elt.discount} %</p>;

    if( elt.sale )
        return <p className="showcase-badge angle black">sale</p>
    
    if( elt.new )
        return <p className="showcase-badge angle pink">new</p>
};

export default ProductNew;