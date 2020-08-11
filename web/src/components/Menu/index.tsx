import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css'

interface PageHeaderProps {
    title: string;
    description?: string;
}

const Menu: React.FC<PageHeaderProps> = (props) => {
    return (
                <div className="top-bar">
                    <Link to="/">
                        {/* <img id="userphoto" src="https://github.com/ygorverde.png" alt="Voltar para home" /> */}
                    </Link>

                    <Link to="/login" className="login">
                    Realizar login ou cadastrar-se.
                    </Link>

                </div>
    );
}

export default Menu;
