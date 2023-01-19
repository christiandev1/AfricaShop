import React from 'react';
import { ButtonHTML } from '../components/Button';
const PageNotFound = () => {
    return (
        <div className='w-full h-screen flex flex-wrap bg-rentwhite'>
            <div className='w-full h-fit my-auto flex flex-wrap space-y-8'>
                <div className='font-bold text-3xl text-hightlis text-rentprincipal w-full flex justify-center'>Page non trouvée</div>
                <div className='font-bold text-xl text-renthighlight w-full flex justify-center'>Nous avons pas pu trouvée votre page recherchée.</div>
                <div className='font-bold text-xl h-16  text-rentprincipal w-full flex justify-center'>
                    <ButtonHTML type='button' text="Retournez à l'acceuil" onClick={(e)=>window.location.replace('/')} />
                </div>
                
            </div>
        </div>
    );
};

export default PageNotFound;