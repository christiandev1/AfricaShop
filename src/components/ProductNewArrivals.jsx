import React from 'react';

const productImages = {
    clothes1:  require('../assets/images/products/clothes-1.jpg'),
    clothes2: require('../assets/images/products/clothes-2.jpg'),
    clothes3: require('../assets/images/products/clothes-3.jpg'),
    shirt1: require('../assets/images/products/shirt-1.jpg'),
    jacket1: require('../assets/images/products/jacket-1.jpg'),
    jacket3: require('../assets/images/products/jacket-3.jpg'),
    jacket5: require('../assets/images/products/jacket-5.jpg'),
    shorts1: require('../assets/images/products/shorts-1.jpg'),
    sports1: require('../assets/images/products/sports-1.jpg'),
    sports2: require('../assets/images/products/sports-2.jpg'),
    sports3: require('../assets/images/products/sports-3.jpg'),
    sports6: require('../assets/images/products/sports-6.jpg'),
    partywear1: require('../assets/images/products/party-wear-1.jpg'),
    shoe1: require('../assets/images/products/shoe-1.jpg'),
    shoe2: require('../assets/images/products/shoe-2.jpg'),
    shoe3: require('../assets/images/products/shoe-3.jpg'),
    watch1: require('../assets/images/products/watch-1.jpg'),
    watch3: require('../assets/images/products/watch-3.jpg'),
    jewellery1: require('../assets/images/products/jewellery-1.jpg'),
    jewellery2: require('../assets/images/products/jewellery-2.jpg'),
    jewellery3: require('../assets/images/products/jewellery-3.jpg'),
    perfume: require('../assets/images/products/perfume.jpg'),
    belt: require('../assets/images/products/belt.jpg'),
    shampoo: require('../assets/images/products/shampoo.jpg'),
};

const ProductNewArrivals = (props) => {

    const { data } = props;

    return (
        <div className="product-minimal">
        {
            Object.keys(data).map((key, index) => {
                return <ProductNewArrivalsItem item={data[key]} />
            })
        }
        </div>
    )
}

const ProductNewArrivalsItem = (props) => {

    const { item } = props;

    return (
        <div className="product-showcase">

            <h2 className="title">{item.title}</h2>

            <div className="showcase-wrapper has-scrollbar">
                {
                    Object.keys(item.content).map((key, index) => {

                        return <div className="showcase-container"  key={index}>
                            {
                                item.content[key].map((item2, key) => {

                                    return <div className="showcase" key={key}>

                                                <a href="/" className="showcase-img-box">
                                                    <img src={productImages[item2.imageId]} alt={item2.title} width="70" className="showcase-img" />
                                                </a>
                        
                                                <div className="showcase-content">
                        
                                                    <a href="/">
                                                        <h4 className="showcase-title">{item2.title}</h4>
                                                    </a>
                            
                                                    <a href="/" className="showcase-category">{item2.category}</a>
                            
                                                    <div className="price-box">
                                                        <p className="price">{item2.price}</p>
                                                        <del>{item2.del_price}</del>
                                                    </div>
                        
                                                </div>
                        
                                            </div>
                                })
                            }
                        </div>
                    })
                }
                
            </div>

        </div>
    )
}
export default ProductNewArrivals;