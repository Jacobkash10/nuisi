import React from 'react'
import './ravage.css'
import Img3 from '../../../assets/images/rongeur2.jpg'
import Img4 from '../../../assets/images/images.jpeg'
import Img5 from '../../../assets/images/images2.jpeg'
import { Link } from 'react-router-dom'

const Ravage = () => {
    return (
        <section className='ravage'>
            <h2 className="title">services de lutte</h2>
            <h3 className="subtitle">contre les nuisibles</h3>
            <div className='ravage__cards'>
                <div className="ravage__card">
                    <div className='ravage__img'>
                        <img src={Img4} alt="" />
                    </div>
                    <div className='ravage__body'>
                        <h4>Lutte contre les nuisibles</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, obcaecati reprehenderit aliquid dolor incidunt aspernatur cupiditate autem architecto labore veniam!</p>
                    </div>
                    <div className='ravage__bottom'>
                        <h5><Link>En savoir plus<i class='bx bxs-right-arrow-circle'></i></Link></h5>
                    </div>
                </div>
                <div className="ravage__card">
                    <div className='ravage__img'>
                        <img src={Img3} alt="" />
                    </div>
                    <div className='ravage__body'>
                        <h4>Lutte contre les rongeurs</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, obcaecati reprehenderit aliquid dolor incidunt aspernatur cupiditate autem architecto labore veniam!</p>
                    </div>
                    <div className='ravage__bottom'>
                        <h5><Link>En savoir plus<i class='bx bxs-right-arrow-circle'></i></Link></h5>
                    </div>
                </div>
                <div className="ravage__card">
                    <div className='ravage__img'>
                        <img src={Img5} alt="" />
                    </div>
                    <div className='ravage__body'>
                        <h4>Lutte contre les termites</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, obcaecati reprehenderit aliquid dolor incidunt aspernatur cupiditate autem architecto labore veniam!</p>
                    </div>
                    <div className='ravage__bottom'>
                        <h5><Link>En savoir plus<i class='bx bxs-right-arrow-circle'></i></Link></h5>
                    </div>
                </div>
            </div>
            <Link><button className='ravage__button'>Voir tous les services</button></Link>
        </section>
    )
}

export default Ravage
