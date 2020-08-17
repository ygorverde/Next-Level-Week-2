import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import BannerPage from '../Banner';

function RegisterForm() {
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
        <div id="page-register-form" className="container">
        
        <main>
        <PageHeader title="Cadastro"
         description="Preencha os dados abaixo para começar."
        />
            <form onSubmit={handleCreateClass}>
            <fieldset>

                <Input name="nome"
                placeholder="Nome" 
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                />

                <Input name="sobrenome"
                placeholder="Sobrenome" 
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                />

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

            <button type="submit" id="btnregister">
                    Concluir cadastro
                </button>
        </form>
        </main>
                <BannerPage />
        </div>
    )
}

export default RegisterForm;