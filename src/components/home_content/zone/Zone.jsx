import React from 'react'
import './zone.css'
import Img from '../../../assets/images/maroc2.jpg'

const Zone = () => {
    return (
        <section className='zone'>
            <div className='zone__carte'>
                <h2><span>Zone </span> de services</h2>
                <div className='carte__left'>
                    <img src={Img} alt="" />
                </div>
                <div className='carte__right'></div>
            </div>
            <div className='zone__city'>
                <h2>le premier fournisseur <span>de services de lutte contre les nuisibles</span> <br /> au maroc</h2>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto recusandae corrupti non quis facilis, quas in expedita asperiores
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto recusandae corrupti non quis facilis, quas in expedita asperiores
                </h5>
                <div className='zone__cities'>
                    <div className='zone__li'>
                        <h4>Casblanca <i class='bx bx-chevrons-left'></i></h4>
                        <h4>Rabat <i class='bx bx-chevrons-left'></i></h4>
                        <h4>Marrakech <i class='bx bx-chevrons-left'></i></h4>
                        <h4>Settat <i class='bx bx-chevrons-left'></i></h4>
                        <h4>chefchaouen <i class='bx bx-chevrons-left'></i></h4>
                    </div>
                    <div className='zone__li'>
                        <h4>Tanger <i class='bx bx-chevrons-left'></i></h4>
                        <h4>Fès <i class='bx bx-chevrons-left'></i></h4>
                        <h4>Kénitra <i class='bx bx-chevrons-left'></i></h4>
                        <h4>Meknès <i class='bx bx-chevrons-left'></i></h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Zone
