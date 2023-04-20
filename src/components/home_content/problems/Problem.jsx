import React from 'react'
import './problem.css'
import Img1 from '../../../assets/images/fourmie.jpg'
import Img2 from '../../../assets/images/spider.jpg'
import Img3 from '../../../assets/images/cafard.jpg'
import Img4 from '../../../assets/images/rongeur.jpg'
import Img5 from '../../../assets/images/abeille.jpg'
import Img6 from '../../../assets/images/moustique.jpg'
import { Link } from 'react-router-dom'

const Problem = () => {
    return (
        <section className='problem'>
            <h2 className='title'>Quel type de problème rencontrez-vous ?</h2>
            <h3 className='subtitle'>sélectionnez toutes les réponses qui s'appliquent</h3>
            <div className='problem__cards'>
                <div className='problem__card'>
                    <Link>
                        <div className='card__img'>
                            <img src={Img1} alt="" className='img' />
                        </div>
                        <div className='card__name'>
                            <p>Fourmies</p>
                        </div>
                    </Link>
                </div>
                <div className='problem__card'>
                    <Link>
                        <div className='card__img'>
                            <img src={Img2} alt="" className='img' />
                        </div>
                        <div className='card__name'>
                            <p>Araignée</p>
                        </div>
                    </Link>
                </div>
                <div className='problem__card'>
                    <Link>
                        <div className='card__img'>
                            <img src={Img3} alt="" className='img' />
                        </div>
                        <div className='card__name'>
                            <p>Cafard</p>
                        </div>
                    </Link>
                </div>
                <div className='problem__card'>
                    <Link>
                        <div className='card__img'>
                            <img src={Img4} alt="" className='img' />
                        </div>
                        <div className='card__name'>
                            <p>Rongeur</p>
                        </div>
                    </Link>
                </div>
                <div className='problem__card'>
                    <Link>
                        <div className='card__img'>
                            <img src={Img5} alt="" className='img' />
                        </div>
                        <div className='card__name'>
                            <p>Abeille</p>
                        </div>
                    </Link>
                </div>
                <div className='problem__card'>
                    <Link>
                        <div className='card__img'>
                            <img src={Img6} alt="" className='img' />
                        </div>
                        <div className='card__name'>
                            <p>Moustique</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Problem
