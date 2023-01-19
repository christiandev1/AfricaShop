import React from 'react';

import SideBar from '../layouts/SideBar';
import ProductNewArrivals from './ProductNewArrivals';
import ProductFeatured from './ProductFeatured';
import ProductNew from './ProductNew';

import dataProductFeatured from '../services/product_featured.json';
import dataProductNewArrivals from '../services/product.json';
import dataNewProduct from '../services/product_new.json';

const Products = () => {
    return (
        <div>
            
          {/* <!--- PRODUCT --> */}

          <div className="product-container">

            <div className="container">

                {/* <!--- SIDEBAR--> */}
                <SideBar />

                <div className="product-box">

                    {/* <!--- PRODUCT MINIMAL --> */}
                    <ProductNewArrivals data={dataProductNewArrivals} />

                    {/* <!--- PRODUCT FEATURED  --> */}
                    <ProductFeatured data={dataProductFeatured} />
                
                    {/* <!--- PRODUCT GRID --> */}
                    <ProductNew data={dataNewProduct} />
                </div>

            </div>
          </div>
        </div>
    )
}

export default Products;