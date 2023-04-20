import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Problem from '../../components/home_content/problems/Problem'
import BestPest from '../../components/home_content/bestPest/BestPest'
import Ravage from '../../components/home_content/ravage/Ravage'
import Offre from '../../components/home_content/offre/Offre'
import Read from '../../components/home_content/read/Read'
import Zone from '../../components/home_content/zone/Zone'
import Contact from '../../components/home_content/contact/Contact'
import Foot from '../../components/foot/Foot'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Navbar />
            <section className='home__banner'>
                <div className='banner__infos'>
                    <h2>au service du coeur du <br /> <span>Maroc</span></h2>
                    <h4>nous éliminons les insectes</h4>
                    <Link><button>Demander un devis gratuit</button></Link>
                </div>
            </section>
            <Problem />
            <BestPest />
            <Ravage />
            <Offre />
            <Read />
            <Zone />
            <Contact />
            <Foot />
        </>
    )
}

export default Home
