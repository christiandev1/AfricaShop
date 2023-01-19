import React from 'react';
import { ButtonHTML } from '../components/Button';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Product from '../components/Product';
import Blog from '../components/Blog';
import Testimonials from '../components/Testimonials_Cta_Services';
import NotificationToast from '../components/NotificationToast';
import Modal from '../components/Modal';
import ImportScriptJS from '../customHooks/importScript';

const Welcome = () => {
 
  ImportScriptJS('../assets/js/script.js');

  React.useEffect(()=>{
    // ImportScript('../assets/js/script');
    setTimeout(function(){
      //ImportScript('../assets/js/script');
      // const script = document.createElement("script");
      // script.src = '../assets/js/script';
      // script.async = true;
      // document.body.appendChild(script);
    },5000)
  },[]);

  // componentWillMount() {
  //   ImportScript('../assets/js/script');
  // };

    return (
          <div>
            <div className="overlay" data-overlay></div>

            {/* <!--  - MODAL   --> */}
            <Modal />

            {/* <!-- - NOTIFICATION TOAST--> */}
            <NotificationToast />


            {/* <!--  - HEADER  --> */}
            <Header />


            {/* <!--  - MAIN   --> */}

            <main>

              {/* <!--  - BANNER     --> */}
              <Banner />

              {/* <!--- CATEGORY --> */}
              <Category />

              {/* <!--- PRODUCT --> */}
              <Product />

              {/* <!--- TESTIMONIALS, CTA & SERVICE  --> */}
              <Testimonials />

              {/* <!--- BLOG --> */}
              <Blog />

            </main>

            {/* <!--- FOOTER--> */}

            <Footer />

            {/* <!--- custom js link-> */}
            {/* <script src={ScriptJS}></script> */}

            {/* <!--- ionicon link--> */}
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

          </div>
    );
};

export default Welcome;