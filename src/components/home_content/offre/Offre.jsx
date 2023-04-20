import React from 'react'
import './offre.css'
import { Link } from 'react-router-dom'

const Offre = () => {
    return (
        <section className='offre'>
            <div className='offre__top'>
                <div className='left__col'>
                    <div className='content'>
                        <h5>Offres spéciales</h5>
                        <h3>économisez de <strong>l'argent</strong> dès aujourd'hui</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, atque. Magni incidunt amet rerum vel.</p>
                        <button><Link>voir tous les services</Link></button>
                    </div>
                </div>
                <div className='right__col'>
                    <div className='right__top'>
                        <div className='content'>
                            <h5>contrôle des nuisibles</h5>
                            <h3>25 dhs <span>de réduction</span></h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, atque. Magni incidunt amet rerum vel.</p>
                            <button><Link>voir tous les services</Link></button>
                        </div>
                    </div>
                    <div className='right__bottom'>
                        <div className='content'>
                            <h5>Lorem ipsum</h5>
                            <h3>50 dhs <span>de réduction</span></h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, atque. Magni incidunt amet rerum vel.</p>
                            <button><Link>voir tous les services</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='offre__bottom'>
                <div className='content'>
                    <h5>Offre spéciale</h5>
                    <h3>pour obtenir une tranquillité d'esprit et une <br /> maison sans nuisibles à partir de 300 dhs/mois</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, atque. Magni incidunt amet rerum vel.</p>
                    <button><Link>demander l'offre</Link></button>
                </div>
            </div>
        </section>
    )
}

export default Offre
