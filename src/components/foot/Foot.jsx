import React from 'react'
import './foot.css'
import { Link } from 'react-router-dom'

const Foot = () => {
    return (
        <footer>
            <div className='footer1'>
                <span>N° de tél : +212 76 876 2432</span>
                <span>EMAIL : nuisibloc@gmail.com</span>
                <span>ADRESSE : Maroc, 22 lorem ipsum</span>
            </div>
            <div className='footer2'>
                <div className='footer2__about'>
                    <h4>A propos</h4>
                    <h5>Nuisibloc est une nouvelle société de lutte contre les nuisibles, basée au Maroc.</h5>
                </div>
                <div className='footer2__courses'>
                    <h4>Cours</h4>
                    <div className='courses__links'>
                        <div className="course__link">
                            <p><i class='bx bx-chevrons-left'></i><Link>Lorem ipsum</Link></p>
                            <p><i class='bx bx-chevrons-left'></i><Link>Lorem ipsum</Link></p>
                            <p><i class='bx bx-chevrons-left'></i><Link>Lorem ipsum</Link></p>
                        </div>
                        <div className="course__link">
                            <p><i class='bx bx-chevrons-left'></i><Link>Lorem ipsum</Link></p>
                            <p><i class='bx bx-chevrons-left'></i><Link>Lorem ipsum</Link></p>
                            <p><i class='bx bx-chevrons-left'></i><Link>Lorem ipsum</Link></p>
                        </div>
                        <div className="course__link">
                            <p><i class='bx bx-chevrons-left'></i><Link>Lorem ipsum</Link></p>
                            <p><i class='bx bx-chevrons-left'></i><Link>Lorem ipsum</Link></p>
                            <p><i class='bx bx-chevrons-left'></i><Link>Lorem ipsum</Link></p>
                        </div>
                        <div className="course__link">
                            <p><i class='bx bx-chevrons-left'></i><Link>Lorem ipsum</Link></p>
                            <p><i class='bx bx-chevrons-left'></i><Link>Lorem ipsum</Link></p>
                            <p><i class='bx bx-chevrons-left'></i><Link>Lorem ipsum</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer3'>
                <h6>Copyright 2023 nuisibloc All Reserved</h6>
                <h6>Tems & Conditions | Privacy Policy</h6>
            </div>
        </footer>
    )
}

export default Foot
