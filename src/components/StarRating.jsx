import React from "react"


export const StarRating = (props) => {

    const totalStars = 5;
    
    const {activeStars} = props;

    return (
        <div className="showcase-rating">
        {[...new Array(totalStars)].map((arr, index) => {
            return index < activeStars ? <ion-icon name="star"></ion-icon> : <ion-icon name="star-outline"></ion-icon>;
        })}
        </div>
    );

}