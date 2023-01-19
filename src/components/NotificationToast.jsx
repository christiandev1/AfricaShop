import React from 'react';

import jewellery1 from '../assets/images/products/jewellery-1.jpg';

const NotificationToast = () => {
    return (
        <div>
            
            {/* <!-- - NOTIFICATION TOAST--> */}

            <div className="notification-toast" data-toast>

              <button className="toast-close-btn" data-toast-close>
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <div className="toast-banner">
                <img src={jewellery1} alt="Rose Gold Earrings" width="80" height="70" />
              </div>

              <div className="toast-detail">

                <p className="toast-message">
                  Someone in new just bought
                </p>

                <p className="toast-title">
                  Rose Gold Earrings
                </p>

                <p className="toast-meta">
                  <time datetime="PT2M">2 Minutes</time> ago
                </p>

              </div>

            </div>
        </div>
    )
}

export default NotificationToast;