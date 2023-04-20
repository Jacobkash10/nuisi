import React from 'react'
import './read.css'
import Img from '../../../assets/images/profil.png'

const Read = () => {
    return (
        <section className='read'>
            <h2 className='title'>Lire nos commentaires</h2>
            <h3 className='subtitle'>en ligne</h3>
            <div className='read__cards'>
                <div className='read__card'>
                    <div className='bg'>
                        <i class='bx bxs-down-arrow'></i>
                        <div className='read__icon'>
                            <i class='bx bxs-quote-left'></i>
                        </div>
                        <div className='read__body'>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non quaerat ducimus architecto dolores? Reiciendis earum nesciunt obcaecati impedit quas.</h5>
                        </div>
                    </div>
                    <div className='read__bottom'>
                        <img src={Img} alt="" className='read__img' />
                        <h5>Jhon Doe</h5>
                    </div>
                </div>
                <div className='read__card'>
                    <div className='bg'>
                        <i class='bx bxs-down-arrow'></i>
                        <div className='read__icon'>
                            <i class='bx bxs-quote-left'></i>
                        </div>
                        <div className='read__body'>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non quaerat ducimus architecto dolores? Reiciendis earum nesciunt obcaecati impedit quas.</h5>
                        </div>
                    </div>
                    <div className='read__bottom'>
                        <img src={Img} alt="" className='read__img' />
                        <h5>Jhon Doe</h5>
                    </div>
                </div>
                <div className='read__card'>
                    <div className='bg'>
                        <i class='bx bxs-down-arrow'></i>
                        <div className='read__icon'>
                            <i class='bx bxs-quote-left'></i>
                        </div>
                        <div className='read__body'>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non quaerat ducimus architecto dolores? Reiciendis earum nesciunt obcaecati impedit quas.</h5>
                        </div>
                    </div>
                    <div className='read__bottom'>
                        <img src={Img} alt="" className='read__img' />
                        <h5>Jhon Doe</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Read
