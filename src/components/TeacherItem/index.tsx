import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/45312912?s=460&u=ffd51f056e25e08a2d92523be1bbf2399cd79c98&v=4" alt="Ygor Verde"/>
                        <div>
                            <strong>Ygor Verde</strong>
                            <span>Matemática</span>
                        </div>
                    </header>

                    <p>
                    Matemática é matéria que muitos acham chata, mas você nos provou que também pode ser divertida.  
                    <br /> <br />
                    Matemática é matéria que muitos acham chata, mas você nos provou que também pode ser divertida.
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 50,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;