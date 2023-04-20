import React from 'react'
import './contact.css'
import Img from '../../../assets/images/imageContact.jpeg'

const Contact = () => {
    return (
        <section className='contact'>
            <div className='contact1'>
                <div className='contact1__img'>
                    <img src={Img} alt="" />
                </div>
                <div className='contact1__infos'>
                    <h2>VOTRE SATISFACTION est <br /> <span>GARANTIE !</span></h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ipsa itaque veritatis velit dolorem. Consequatur quo distinctio eligendi sed illum velit alias
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ipsa itaque veritatis velit dolorem. Consequatur quo distinctio eligendi sed illum velit alias.
                    </p>
                </div>
            </div>
            <div className='contact2'>
                <div className='contact2__infos'>
                    <h2>Commencez dès <span>aujourd'hui!</span><br /> appelez-nous au <span>456 476 3478</span> ou <br /> obtenir un devis gratuit</h2>
                </div>
                <div className='contact2__form'>
                    <form action="">
                        <div className="flex">
                            <div className="control">
                                <input type="text" placeholder='Votre Nom' />
                            </div>
                            <div className="control">
                                <input type="text" placeholder='Email' />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="control">
                                <input type="text" placeholder='N° de tél' />
                            </div>
                            <div className="control">
                                <input type="text" placeholder='Sujet' />
                            </div>
                        </div>
                        <div className='textarea'>
                            <textarea name="" id="" rows="8" placeholder='Message'></textarea>
                        </div>
                        <div className='button'>
                            <button type="submit">Envoyer le Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
