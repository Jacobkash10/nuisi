import React from 'react'
import './bestPest.css'
import Img1 from '../../../assets/images/abeille2.jpg'
import Img2 from '../../../assets/images/exterminateur.jpg'
import Img3 from '../../../assets/images/images.jpeg'

const BestPest = () => {
    return (
        <section className='best'>
            <div className='best__left'>
                <h2>La lutte contre les nuisibles</h2>
                <h3>Exterminateurs à Casablanca, Rabat, Settat, Marrakech etc.</h3>
                <p>Lorem ipsum dolor sit amet quo possimus quas quasi totam a voluptatibus. Libero ea fugiat rem exercitationem accusantium error neque saepe adipisci voluptatem.</p>
                <div className='best__row'>
                    <div className='best__icon'>
                        <i class='bx bxs-navigation'></i>
                    </div>
                    <div className='best__infos'>
                        <h4>Lorem ipsum dolor sit adipisicing</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className='best__row'>
                    <div className='best__icon'>
                        <i class='bx bxs-check-circle'></i>
                    </div>
                    <div className='best__infos'>
                        <h4>Satisfaction garantie</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
            <div className='best__right'>
                <div className='best__col__img'>
                    <img src={Img1} alt="" />
                    <img src={Img3} alt="" />
                </div>
                <div className='best__img'>
                    <img src={Img2} alt="" />
                </div>
            </div>
        </section>
    )
}

export default BestPest
