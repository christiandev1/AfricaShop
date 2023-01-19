import React from 'react';

import dressIcon from '../assets/images/icons/dress.svg';
import shoesIcon from '../assets/images/icons/shoes.svg';
import jewelryIcon from '../assets/images/icons/jewelry.svg';
import perfumeIcon from '../assets/images/icons/perfume.svg';
import cosmeticsIcon from '../assets/images/icons/cosmetics.svg';
import glassesIcon from '../assets/images/icons/glasses.svg';
import bagIcon from '../assets/images/icons/bag.svg';
import product1 from '../assets/images/products/1.jpg';
import product2 from '../assets/images/products/2.jpg';
import product3 from '../assets/images/products/3.jpg';
import product4 from '../assets/images/products/4.jpg';
import clothes1 from '../assets/images/products/clothes-1.jpg';
import clothes2 from '../assets/images/products/clothes-2.jpg';
import clothes3 from '../assets/images/products/clothes-3.jpg';
import clothes4 from '../assets/images/products/clothes-4.jpg';
import shirt1 from '../assets/images/products/shirt-1.jpg';
import shirt2 from '../assets/images/products/shirt-2.jpg';
import jacket1 from '../assets/images/products/jacket-1.jpg';
import jacket2 from '../assets/images/products/jacket-2.jpg';
import jacket3 from '../assets/images/products/jacket-3.jpg';
import jacket4 from '../assets/images/products/jacket-4.jpg';
import jacket5 from '../assets/images/products/jacket-5.jpg';
import jacket6 from '../assets/images/products/jacket-6.jpg';
import shorts1 from '../assets/images/products/shorts-1.jpg';
import shorts2 from '../assets/images/products/shorts-2.jpg';
import sports1 from '../assets/images/products/sports-1.jpg';
import sports2 from '../assets/images/products/sports-2.jpg';
import sports3 from '../assets/images/products/sports-3.jpg';
import sports4 from '../assets/images/products/sports-4.jpg';
import sports6 from '../assets/images/products/sports-6.jpg';
import partywear1 from '../assets/images/products/party-wear-1.jpg';
import partywear2 from '../assets/images/products/party-wear-2.jpg';
import shoe1 from '../assets/images/products/shoe-1.jpg';
import shoe1_1 from '../assets/images/products/shoe-1_1.jpg';
import shoe2 from '../assets/images/products/shoe-2.jpg';
import shoe2_1 from '../assets/images/products/shoe-2_1.jpg';
import shoe3 from '../assets/images/products/shoe-3.jpg';
import watch1 from '../assets/images/products/watch-1.jpg';
import watch2 from '../assets/images/products/watch-2.jpg';
import watch3 from '../assets/images/products/watch-3.jpg';
import watch4 from '../assets/images/products/watch-4.jpg';
import jewellery1 from '../assets/images/products/jewellery-1.jpg';
import jewellery2 from '../assets/images/products/jewellery-2.jpg';
import jewellery3 from '../assets/images/products/jewellery-3.jpg';
import perfume from '../assets/images/products/perfume.jpg';
import belt from '../assets/images/products/belt.jpg';
import shampoo from '../assets/images/products/shampoo.jpg';

const Products = () => {
    return (
        <div>
            
          {/* <!--- PRODUCT --> */}

          <div className="product-container">

            <div className="container">


                {/* <!--- SIDEBAR--> */}

                <div className="sidebar  has-scrollbar" data-mobile-menu>

                <div className="sidebar-category">

                    <div className="sidebar-top">
                    <h2 className="sidebar-title">Category</h2>

                    <button className="sidebar-close-btn" data-mobile-menu-close-btn>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                    </div>

                    <ul className="sidebar-menu-category-list">

                    <li className="sidebar-menu-category">

                        <button className="sidebar-accordion-menu" data-accordion-btn>

                        <div className="menu-title-flex">
                            <img src={dressIcon} alt="clothes" width="20" height="20"
                            className="menu-title-img" />

                            <p className="menu-title">Clothes</p>
                        </div>

                        <div>
                            <ion-icon name="add-outline" class="add-icon"></ion-icon>
                            <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                        </button>

                        <ul className="sidebar-submenu-category-list" data-accordion>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Shirt</p>
                            <data value="300" className="stock" title="Available Stock">300</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">shorts & jeans</p>
                            <data value="60" className="stock" title="Available Stock">60</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">jacket</p>
                            <data value="50" className="stock" title="Available Stock">50</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">dress & frock</p>
                            <data value="87" className="stock" title="Available Stock">87</data>
                            </a>
                        </li>

                        </ul>

                    </li>

                    <li className="sidebar-menu-category">

                        <button className="sidebar-accordion-menu" data-accordion-btn>

                        <div className="menu-title-flex">
                            <img src={shoesIcon} alt="footwear" className="menu-title-img" width="20"
                            height="20" />

                            <p className="menu-title">Footwear</p>
                        </div>

                        <div>
                            <ion-icon name="add-outline" class="add-icon"></ion-icon>
                            <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                        </button>

                        <ul className="sidebar-submenu-category-list" data-accordion>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Sports</p>
                            <data value="45" className="stock" title="Available Stock">45</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Formal</p>
                            <data value="75" className="stock" title="Available Stock">75</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Casual</p>
                            <data value="35" className="stock" title="Available Stock">35</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Safety Shoes</p>
                            <data value="26" className="stock" title="Available Stock">26</data>
                            </a>
                        </li>

                        </ul>

                    </li>

                    <li className="sidebar-menu-category">

                        <button className="sidebar-accordion-menu" data-accordion-btn>

                        <div className="menu-title-flex">
                            <img src={jewelryIcon} alt="clothes" className="menu-title-img" width="20"
                            height="20" />

                            <p className="menu-title">Jewelry</p>
                        </div>

                        <div>
                            <ion-icon name="add-outline" class="add-icon"></ion-icon>
                            <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                        </button>

                        <ul className="sidebar-submenu-category-list" data-accordion>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Earrings</p>
                            <data value="46" className="stock" title="Available Stock">46</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Couple Rings</p>
                            <data value="73" className="stock" title="Available Stock">73</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Necklace</p>
                            <data value="61" className="stock" title="Available Stock">61</data>
                            </a>
                        </li>

                        </ul>

                    </li>

                    <li className="sidebar-menu-category">

                        <button className="sidebar-accordion-menu" data-accordion-btn>

                        <div className="menu-title-flex">
                            <img src={perfumeIcon} alt="perfume" className="menu-title-img" width="20"
                            height="20" />

                            <p className="menu-title">Perfume</p>
                        </div>

                        <div>
                            <ion-icon name="add-outline" class="add-icon"></ion-icon>
                            <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                        </button>

                        <ul className="sidebar-submenu-category-list" data-accordion>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Clothes Perfume</p>
                            <data value="12" className="stock" title="Available Stock">12 pcs</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Deodorant</p>
                            <data value="60" className="stock" title="Available Stock">60 pcs</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">jacket</p>
                            <data value="50" className="stock" title="Available Stock">50 pcs</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">dress & frock</p>
                            <data value="87" className="stock" title="Available Stock">87 pcs</data>
                            </a>
                        </li>

                        </ul>

                    </li>

                    <li className="sidebar-menu-category">

                        <button className="sidebar-accordion-menu" data-accordion-btn>

                        <div className="menu-title-flex">
                            <img src={cosmeticsIcon} alt="cosmetics" className="menu-title-img" width="20"
                            height="20" />

                            <p className="menu-title">Cosmetics</p>
                        </div>

                        <div>
                            <ion-icon name="add-outline" class="add-icon"></ion-icon>
                            <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                        </button>

                        <ul className="sidebar-submenu-category-list" data-accordion>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Shampoo</p>
                            <data value="68" className="stock" title="Available Stock">68</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Sunscreen</p>
                            <data value="46" className="stock" title="Available Stock">46</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Body Wash</p>
                            <data value="79" className="stock" title="Available Stock">79</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Makeup Kit</p>
                            <data value="23" className="stock" title="Available Stock">23</data>
                            </a>
                        </li>

                        </ul>

                    </li>

                    <li className="sidebar-menu-category">

                        <button className="sidebar-accordion-menu" data-accordion-btn>

                        <div className="menu-title-flex">
                            <img src={glassesIcon} alt="glasses" className="menu-title-img" width="20"
                            height="20" />

                            <p className="menu-title">Glasses</p>
                        </div>

                        <div>
                            <ion-icon name="add-outline" class="add-icon"></ion-icon>
                            <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                        </button>

                        <ul className="sidebar-submenu-category-list" data-accordion>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Sunglasses</p>
                            <data value="50" className="stock" title="Available Stock">50</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Lenses</p>
                            <data value="48" className="stock" title="Available Stock">48</data>
                            </a>
                        </li>

                        </ul>

                    </li>

                    <li className="sidebar-menu-category">

                        <button className="sidebar-accordion-menu" data-accordion-btn>

                        <div className="menu-title-flex">
                            <img src={bagIcon} alt="bags" className="menu-title-img" width="20" height="20" />

                            <p className="menu-title">Bags</p>
                        </div>

                        <div>
                            <ion-icon name="add-outline" class="add-icon"></ion-icon>
                            <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                        </div>

                        </button>

                        <ul className="sidebar-submenu-category-list" data-accordion>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Shopping Bag</p>
                            <data value="62" className="stock" title="Available Stock">62</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Gym Backpack</p>
                            <data value="35" className="stock" title="Available Stock">35</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Purse</p>
                            <data value="80" className="stock" title="Available Stock">80</data>
                            </a>
                        </li>

                        <li className="sidebar-submenu-category">
                            <a href="/" className="sidebar-submenu-title">
                            <p className="product-name">Wallet</p>
                            <data value="75" className="stock" title="Available Stock">75</data>
                            </a>
                        </li>

                        </ul>

                    </li>

                    </ul>

                </div>

                <div className="product-showcase">

                    <h3 className="showcase-heading">best sellers</h3>

                    <div className="showcase-wrapper">

                    <div className="showcase-container">

                        <div className="showcase">

                        <a href="/" className="showcase-img-box">
                            <img src={product1} alt="baby fabric shoes" width="75" height="75"
                            className="showcase-img" />
                        </a>

                        <div className="showcase-content">

                            <a href="/">
                            <h4 className="showcase-title">baby fabric shoes</h4>
                            </a>

                            <div className="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            </div>

                            <div className="price-box">
                            <del>$5.00</del>
                            <p className="price">$4.00</p>
                            </div>

                        </div>

                        </div>

                        <div className="showcase">

                        <a href="/" className="showcase-img-box">
                            <img src={product2} alt="men's hoodies t-shirt" className="showcase-img"
                            width="75" height="75" />
                        </a>

                        <div className="showcase-content">

                            <a href="/">
                            <h4 className="showcase-title">men's hoodies t-shirt</h4>
                            </a>
                            <div className="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-half-outline"></ion-icon>
                            </div>

                            <div className="price-box">
                            <del>$17.00</del>
                            <p className="price">$7.00</p>
                            </div>

                        </div>

                        </div>

                        <div className="showcase">

                        <a href="/" className="showcase-img-box">
                            <img src={product3} alt="girls t-shirt" className="showcase-img" width="75"
                            height="75" />
                        </a>

                        <div className="showcase-content">

                            <a href="/">
                            <h4 className="showcase-title">girls t-shirt</h4>
                            </a>
                            <div className="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-half-outline"></ion-icon>
                            </div>

                            <div className="price-box">
                            <del>$5.00</del>
                            <p className="price">$3.00</p>
                            </div>

                        </div>

                        </div>

                        <div className="showcase">

                        <a href="/" className="showcase-img-box">
                            <img src={product4} alt="woolen hat for men" className="showcase-img" width="75"
                            height="75" />
                        </a>

                        <div className="showcase-content">

                            <a href="/">
                            <h4 className="showcase-title">woolen hat for men</h4>
                            </a>
                            <div className="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            </div>

                            <div className="price-box">
                            <del>$15.00</del>
                            <p className="price">$12.00</p>
                            </div>

                        </div>

                        </div>

                    </div>

                    </div>

                </div>

                </div>



                <div className="product-box">

                {/* <!--- PRODUCT MINIMAL --> */}

                <div className="product-minimal">

                    <div className="product-showcase">

                    <h2 className="title">New Arrivals</h2>

                    <div className="showcase-wrapper has-scrollbar">

                        <div className="showcase-container">

                        <div className="showcase">

                            <a href="/" className="showcase-img-box">
                            <img src={clothes1} alt="relaxed short full sleeve t-shirt" width="70" className="showcase-img" />
                            </a>

                            <div className="showcase-content">

                            <a href="/">
                                <h4 className="showcase-title">Relaxed Short full Sleeve T-Shirt</h4>
                            </a>

                            <a href="/" className="showcase-category">Clothes</a>

                            <div className="price-box">
                                <p className="price">$45.00</p>
                                <del>$12.00</del>
                            </div>

                            </div>

                        </div>

                        <div className="showcase">
                        
                            <a href="/" className="showcase-img-box">
                            <img src={clothes2} alt="girls pink embro design top" className="showcase-img" width="70" />
                            </a>
                        
                            <div className="showcase-content">
                        
                            <a href="/">
                                <h4 className="showcase-title">Girls pnk Embro design Top</h4>
                            </a>
                        
                            <a href="/" className="showcase-category">Clothes</a>
                        
                            <div className="price-box">
                                <p className="price">$61.00</p>
                                <del>$9.00</del>
                            </div>
                        
                            </div>
                        
                        </div>

                        <div className="showcase">
                        
                            <a href="/" className="showcase-img-box">
                            <img src={clothes3} alt="black floral wrap midi skirt" className="showcase-img"
                                width="70" />
                            </a>
                        
                            <div className="showcase-content">
                        
                            <a href="/">
                                <h4 className="showcase-title">Black Floral Wrap Midi Skirt</h4>
                            </a>
                        
                            <a href="/" className="showcase-category">Clothes</a>
                        
                            <div className="price-box">
                                <p className="price">$76.00</p>
                                <del>$25.00</del>
                            </div>
                        
                            </div>
                        
                        </div>

                        <div className="showcase">
                        
                            <a href="/" className="showcase-img-box">
                            <img src={shirt1} alt="pure garment dyed cotton shirt" className="showcase-img"
                                width="70" />
                            </a>
                        
                            <div className="showcase-content">
                        
                            <a href="/">
                                <h4 className="showcase-title">Pure Garment Dyed Cotton Shirt</h4>
                            </a>
                        
                            <a href="/" className="showcase-category">Mens Fashion</a>
                        
                            <div className="price-box">
                                <p className="price">$68.00</p>
                                <del>$31.00</del>
                            </div>
                        
                            </div>
                        
                        </div>

                        </div>

                        <div className="showcase-container">
                        
                        <div className="showcase">
                        
                            <a href="/" className="showcase-img-box">
                            <img src={jacket5} alt="men yarn fleece full-zip jacket" className="showcase-img"
                                width="70" />
                            </a>
                        
                            <div className="showcase-content">
                        
                            <a href="/">
                                <h4 className="showcase-title">MEN Yarn Fleece Full-Zip Jacket</h4>
                            </a>
                        
                            <a href="/" className="showcase-category">Winter wear</a>
                        
                            <div className="price-box">
                                <p className="price">$61.00</p>
                                <del>$11.00</del>
                            </div>
                        
                            </div>
                        
                        </div>
                        
                        <div className="showcase">
                        
                            <a href="/" className="showcase-img-box">
                            <img src={jacket1} alt="mens winter leathers jackets" className="showcase-img"
                                width="70" />
                            </a>
                        
                            <div className="showcase-content">
                        
                            <a href="/">
                                <h4 className="showcase-title">Mens Winter Leathers Jackets</h4>
                            </a>
                        
                            <a href="/" className="showcase-category">Winter wear</a>
                        
                            <div className="price-box">
                                <p className="price">$32.00</p>
                                <del>$20.00</del>
                            </div>
                        
                            </div>
                        
                        </div>
                        
                        <div className="showcase">
                        
                            <a href="/" className="showcase-img-box">
                            <img src={jacket3} alt="mens winter leathers jackets" className="showcase-img"
                                width="70" />
                            </a>
                        
                            <div className="showcase-content">
                        
                            <a href="/">
                                <h4 className="showcase-title">Mens Winter Leathers Jackets</h4>
                            </a>
                        
                            <a href="/" className="showcase-category">Jackets</a>
                        
                            <div className="price-box">
                                <p className="price">$50.00</p>
                                <del>$25.00</del>
                            </div>
                        
                            </div>
                        
                        </div>
                        
                        <div className="showcase">
                        
                            <a href="/" className="showcase-img-box">
                            <img src={shorts1} alt="better basics french terry sweatshorts" className="showcase-img"
                                width="70" />
                            </a>
                        
                            <div className="showcase-content">
                        
                            <a href="/">
                                <h4 className="showcase-title">Better Basics French Terry Sweatshorts</h4>
                            </a>
                        
                            <a href="/" className="showcase-category">Shorts</a>
                        
                            <div className="price-box">
                                <p className="price">$20.00</p>
                                <del>$10.00</del>
                            </div>
                        
                            </div>
                        
                        </div>
                        
                        </div>

                    </div>

                    </div>

                    <div className="product-showcase">
                    
                    <h2 className="title">Trending</h2>
                    
                    <div className="showcase-wrapper  has-scrollbar">
                    
                        <div className="showcase-container">
                    
                        <div className="showcase">
                    
                            <a href="/" className="showcase-img-box">
                            <img src={sports1} alt="running & trekking shoes - white" className="showcase-img"
                                width="70" />
                            </a>
                    
                            <div className="showcase-content">
                    
                            <a href="/">
                                <h4 className="showcase-title">Running & Trekking Shoes - White</h4>
                            </a>
                    
                            <a href="/" className="showcase-category">Sports</a>
                    
                            <div className="price-box">
                                <p className="price">$49.00</p>
                                <del>$15.00</del>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        <div className="showcase">
                    
                            <a href="/" className="showcase-img-box">
                            <img src={sports2} alt="trekking & running shoes - black" className="showcase-img"
                                width="70" />
                            </a>
                    
                            <div className="showcase-content">
                    
                            <a href="/">
                                <h4 className="showcase-title">Trekking & Running Shoes - black</h4>
                            </a>
                    
                            <a href="/" className="showcase-category">Sports</a>
                    
                            <div className="price-box">
                                <p className="price">$78.00</p>
                                <del>$36.00</del>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        <div className="showcase">
                    
                            <a href="/" className="showcase-img-box">
                            <img src={partywear1} alt="womens party wear shoes" className="showcase-img"
                                width="70" />
                            </a>
                    
                            <div className="showcase-content">
                    
                            <a href="/">
                                <h4 className="showcase-title">Womens Party Wear Shoes</h4>
                            </a>
                    
                            <a href="/" className="showcase-category">Party wear</a>
                    
                            <div className="price-box">
                                <p className="price">$94.00</p>
                                <del>$42.00</del>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        <div className="showcase">
                    
                            <a href="/" className="showcase-img-box">
                            <img src={sports3} alt="sports claw women's shoes" className="showcase-img"
                                width="70" />
                            </a>
                    
                            <div className="showcase-content">
                    
                            <a href="/">
                                <h4 className="showcase-title">Sports Claw Women's Shoes</h4>
                            </a>
                    
                            <a href="/" className="showcase-category">Sports</a>
                    
                            <div className="price-box">
                                <p className="price">$54.00</p>
                                <del>$65.00</del>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        </div>
                    
                        <div className="showcase-container">
                    
                        <div className="showcase">
                    
                            <a href="/" className="showcase-img-box">
                            <img src={sports6} alt="air tekking shoes - white" className="showcase-img"
                                width="70" />
                            </a>
                    
                            <div className="showcase-content">
                    
                            <a href="/">
                                <h4 className="showcase-title">Air Trekking Shoes - white</h4>
                            </a>
                    
                            <a href="/" className="showcase-category">Sports</a>
                    
                            <div className="price-box">
                                <p className="price">$52.00</p>
                                <del>$55.00</del>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        <div className="showcase">
                    
                            <a href="/" className="showcase-img-box">
                            <img src={shoe3} alt="Boot With Suede Detail" className="showcase-img" width="70" />
                            </a>
                    
                            <div className="showcase-content">
                    
                            <a href="/">
                                <h4 className="showcase-title">Boot With Suede Detail</h4>
                            </a>
                    
                            <a href="/" className="showcase-category">boots</a>
                    
                            <div className="price-box">
                                <p className="price">$20.00</p>
                                <del>$30.00</del>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        <div className="showcase">
                    
                            <a href="/" className="showcase-img-box">
                            <img src={shoe1} alt="men's leather formal wear shoes" className="showcase-img"
                                width="70" />
                            </a>
                    
                            <div className="showcase-content">
                    
                            <a href="/">
                                <h4 className="showcase-title">Men's Leather Formal Wear shoes</h4>
                            </a>
                    
                            <a href="/" className="showcase-category">formal</a>
                    
                            <div className="price-box">
                                <p className="price">$56.00</p>
                                <del>$78.00</del>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        <div className="showcase">
                    
                            <a href="/" className="showcase-img-box">
                            <img src={shoe2} alt="casual men's brown shoes" className="showcase-img" width="70" />
                            </a>
                    
                            <div className="showcase-content">
                    
                            <a href="/">
                                <h4 className="showcase-title">Casual Men's Brown shoes</h4>
                            </a>
                    
                            <a href="/" className="showcase-category">Casual</a>
                    
                            <div className="price-box">
                                <p className="price">$50.00</p>
                                <del>$55.00</del>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        </div>
                    
                    </div>
                    
                    </div>

                    <div className="product-showcase">
                    
                    <h2 className="title">Top Rated</h2>
                    
                    <div className="showcase-wrapper  has-scrollbar">
                    
                        <div className="showcase-container">
                    
                        <div className="showcase">
                    
                            <a href="/" className="showcase-img-box">
                            <img src={watch3} alt="pocket watch leather pouch" className="showcase-img"
                                width="70" />
                            </a>
                    
                            <div className="showcase-content">
                    
                            <a href="/">
                                <h4 className="showcase-title">Pocket Watch Leather Pouch</h4>
                            </a>
                    
                            <a href="/" className="showcase-category">Watches</a>
                    
                            <div className="price-box">
                                <p className="price">$50.00</p>
                                <del>$34.00</del>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        <div className="showcase">
                    
                            <a href="/" className="showcase-img-box">
                            <img src={jewellery3} alt="silver deer heart necklace" className="showcase-img"
                                width="70" />
                            </a>
                    
                            <div className="showcase-content">
                    
                            <a href="/">
                                <h4 className="showcase-title">Silver Deer Heart Necklace</h4>
                            </a>
                    
                            <a href="/" className="showcase-category">Jewellery</a>
                    
                            <div className="price-box">
                                <p className="price">$84.00</p>
                                <del>$30.00</del>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        <div className="showcase">
                    
                            <a href="/" className="showcase-img-box">
                            <img src={perfume} alt="titan 100 ml womens perfume" className="showcase-img"
                                width="70" />
                            </a>
                    
                            <div className="showcase-content">
                    
                            <a href="/">
                                <h4 className="showcase-title">Titan 100 Ml Womens Perfume</h4>
                            </a>
                    
                            <a href="/" className="showcase-category">Perfume</a>
                    
                            <div className="price-box">
                                <p className="price">$42.00</p>
                                <del>$10.00</del>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        <div className="showcase">
                    
                            <a href="/" className="showcase-img-box">
                            <img src={belt} alt="men's leather reversible belt" className="showcase-img"
                                width="70" />
                            </a>
                    
                            <div className="showcase-content">
                    
                            <a href="/">
                                <h4 className="showcase-title">Men's Leather Reversible Belt</h4>
                            </a>
                    
                            <a href="/" className="showcase-category">Belt</a>
                    
                            <div className="price-box">
                                <p className="price">$24.00</p>
                                <del>$10.00</del>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        </div>
                    
                        <div className="showcase-container">
                    
                        <div className="showcase">
                    
                            <a href="/" className="showcase-img-box">
                            <img src={jewellery2} alt="platinum zircon classNameic ring" className="showcase-img"
                                width="70" />
                            </a>
                    
                            <div className="showcase-content">
                    
                            <a href="/">
                                <h4 className="showcase-title">platinum Zircon classNameic Ring</h4>
                            </a>
                    
                            <a href="/" className="showcase-category">jewellery</a>
                    
                            <div className="price-box">
                                <p className="price">$62.00</p>
                                <del>$65.00</del>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        <div className="showcase">
                    
                            <a href="/" className="showcase-img-box">
                            <img src={watch1} alt="smart watche vital plus" className="showcase-img" width="70" />
                            </a>
                    
                            <div className="showcase-content">
                    
                            <a href="/">
                                <h4 className="showcase-title">Smart watche Vital Plus</h4>
                            </a>
                    
                            <a href="/" className="showcase-category">Watches</a>
                    
                            <div className="price-box">
                                <p className="price">$56.00</p>
                                <del>$78.00</del>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        <div className="showcase">
                    
                            <a href="/" className="showcase-img-box">
                            <img src={shampoo} alt="shampoo conditioner packs" className="showcase-img"
                                width="70" />
                            </a>
                    
                            <div className="showcase-content">
                    
                            <a href="/">
                                <h4 className="showcase-title">shampoo conditioner packs</h4>
                            </a>
                    
                            <a href="/" className="showcase-category">cosmetics</a>
                    
                            <div className="price-box">
                                <p className="price">$20.00</p>
                                <del>$30.00</del>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        <div className="showcase">
                    
                            <a href="/" className="showcase-img-box">
                            <img src={jewellery1} alt="rose gold peacock earrings" className="showcase-img"
                                width="70" />
                            </a>
                    
                            <div className="showcase-content">
                    
                            <a href="/">
                                <h4 className="showcase-title">Rose Gold Peacock Earrings</h4>
                            </a>
                    
                            <a href="/" className="showcase-category">jewellery</a>
                    
                            <div className="price-box">
                                <p className="price">$20.00</p>
                                <del>$30.00</del>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        </div>
                    
                    </div>
                    
                    </div>

                </div>



                {/* <!--- PRODUCT FEATURED  --> */}

                <div className="product-featured">

                    <h2 className="title">Deal of the day</h2>

                    <div className="showcase-wrapper has-scrollbar">

                    <div className="showcase-container">

                        <div className="showcase">
                        
                        <div className="showcase-banner">
                            <img src={shampoo} alt="shampoo, conditioner & facewash packs" className="showcase-img" />
                        </div>

                        <div className="showcase-content">
                            
                            <div className="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                            </div>

                            <a href="/">
                            <h3 className="showcase-title">shampoo, conditioner & facewash packs</h3>
                            </a>

                            <p className="showcase-desc">
                            Lorem ipsum dolor sit amet consectetur Lorem ipsum
                            dolor dolor sit amet consectetur Lorem ipsum dolor
                            </p>

                            <div className="price-box">
                            <p className="price">$150.00</p>

                            <del>$200.00</del>
                            </div>

                            <button className="add-cart-btn">add to cart</button>

                            <div className="showcase-status">
                            <div className="wrapper">
                                <p>
                                already sold: <b>20</b>
                                </p>

                                <p>
                                available: <b>40</b>
                                </p>
                            </div>

                            <div className="showcase-status-bar"></div>
                            </div>

                            <div className="countdown-box">

                            <p className="countdown-desc">
                                Hurry Up! Offer ends in:
                            </p>

                            <div className="countdown">

                                <div className="countdown-content">

                                <p className="display-number">360</p>

                                <p className="display-text">Days</p>

                                </div>

                                <div className="countdown-content">
                                <p className="display-number">24</p>
                                <p className="display-text">Hours</p>
                                </div>

                                <div className="countdown-content">
                                <p className="display-number">59</p>
                                <p className="display-text">Min</p>
                                </div>

                                <div className="countdown-content">
                                <p className="display-number">00</p>
                                <p className="display-text">Sec</p>
                                </div>

                            </div>

                            </div>

                        </div>

                        </div>

                    </div>

                    <div className="showcase-container">
                    
                        <div className="showcase">
                    
                        <div className="showcase-banner">
                            <img src={jewellery1} alt="Rose Gold diamonds Earring" className="showcase-img" />
                        </div>
                    
                        <div className="showcase-content">
                    
                            <div className="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                            </div>
                    
                            <h3 className="showcase-title">
                            <a href="/" className="showcase-title">Rose Gold diamonds Earring</a>
                            </h3>
                    
                            <p className="showcase-desc">
                            Lorem ipsum dolor sit amet consectetur Lorem ipsum
                            dolor dolor sit amet consectetur Lorem ipsum dolor
                            </p>
                    
                            <div className="price-box">
                            <p className="price">$1990.00</p>
                            <del>$2000.00</del>
                            </div>
                    
                            <button className="add-cart-btn">add to cart</button>
                    
                            <div className="showcase-status">
                            <div className="wrapper">
                                <p> already sold: <b>15</b> </p>
                    
                                <p> available: <b>40</b> </p>
                            </div>
                    
                            <div className="showcase-status-bar"></div>
                            </div>
                    
                            <div className="countdown-box">
                    
                            <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                    
                            <div className="countdown">
                                <div className="countdown-content">
                                <p className="display-number">360</p>
                                <p className="display-text">Days</p>
                                </div>
                    
                                <div className="countdown-content">
                                <p className="display-number">24</p>
                                <p className="display-text">Hours</p>
                                </div>
                    
                                <div className="countdown-content">
                                <p className="display-number">59</p>
                                <p className="display-text">Min</p>
                                </div>
                    
                                <div className="countdown-content">
                                <p className="display-number">00</p>
                                <p className="display-text">Sec</p>
                                </div>
                            </div>
                    
                            </div>
                    
                        </div>
                    
                        </div>
                    
                    </div>

                    </div>

                </div>



                {/* <!--- PRODUCT GRID --> */}

                <div className="product-main">

                    <h2 className="title">New Products</h2>

                    <div className="product-grid">

                    <div className="showcase">

                        <div className="showcase-banner">

                        <img src={jacket3} alt="Mens Winter Leathers Jackets" width="300" className="product-img default" />
                        <img src={jacket4} alt="Mens Winter Leathers Jackets" width="300" className="product-img hover" />

                        <p className="showcase-badge">15%</p>

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

                        <a href="/">
                            <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
                        </a>

                        <div className="showcase-rating">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                        </div>

                        <div className="price-box">
                            <p className="price">$48.00</p>
                            <del>$75.00</del>
                        </div>

                        </div>

                    </div>

                    <div className="showcase">
                    
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
                    
                    </div>

                    </div>

                </div>

                </div>

            </div>

          </div>
        </div>
    )
}

export default Products;