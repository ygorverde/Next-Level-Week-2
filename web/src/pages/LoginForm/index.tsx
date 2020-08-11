import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function LoginForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });
        
        setScheduleItems(updatedScheduleItems);
    } 

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/');
        }).catch(() => {
            alert('Ocorreu um erro no cadastro');
        })

    }

    return (
        <div id="page-login-form" className="container">
        <PageHeader />

        <main>
            <form onSubmit={handleCreateClass}>
            <fieldset>
                <legend>Fazer login</legend>

                <Input name="email"
                placeholder="E-mail" 
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                />

                <Input name="senha"
                placeholder="Senha" 
                value={avatar}
                onChange={(e) => { setAvatar(e.target.value) }}/>

            </fieldset>

            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante"/>
                    Não tem conta? <br />
                    Preencha todos os dados.
                </p>
                <a>Cadastre-se</a>
                <button type="submit">
                    Fazer Login
                </button>
            </footer>
        </form>
        </main>
        </div>
    )
}

export default LoginForm;