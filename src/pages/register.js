import React, { useState } from 'react';
import './style.css';
// import useForm from '../components/useForm';
import Header from '../components/Header/header';
// import { post } from '../api';

function Register() {
    const [form, setForm] = useState({
        fullName: '',
        passport: '',
        email: '',
        password: '',
      });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
        ...form,
        [name]: value,
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         // Realize a solicitação POST para criar um novo usuário
    //         const newUser = await post('/user', form);

    //         // Verifique a resposta da API para determinar se o usuário foi criado com sucesso
    //         if (newUser) {
    //         console.log('Novo usuário criado:', newUser);
    //         // Redirecione o usuário para a página de login ou outra página apropriada
    //         } else {
    //         console.error('Erro ao criar um novo usuário');
    //         }
    //     } catch (error) {
    //         console.error('Erro ao criar um novo usuário:', error);
    //     }
    // };

    return(
        <div className="form">
            <Header />
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="fullName">Full Name </label>
                    <input 
                        className="form__input"
                        name="fullName" 
                        value={form.fullName} 
                        onChange = {handleChange} 
                        type="text" 
                        id="fullName" 
                        placeholder="Full Name"/>
                </div>
                <div className="passport">
                    <label className="form__label" for="passport">Passport </label>
                    <input 
                        type="text" 
                        name="passport" 
                        id="passport" 
                        value={form.passport}  
                        className="form__input" 
                        onChange = {handleChange} 
                        placeholder="Passport"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input 
                    type="email" 
                    name='email'
                    id="email" 
                    className="form__input" 
                    value={form.email} 
                    onChange = {handleChange} 
                    placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input 
                    className="form__input" 
                    name='password'
                    type="password"  
                    id="password"
                    value={form.password} 
                    onChange = {handleChange} placeholder="Password"/>
                </div>
                {/* <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" 
                    name='confirmPassword'
                    type="password" 
                    id="confirmPassword" value={form.confirmPassword} 
                    onChange = {handleChange} 
                    placeholder="Confirm Password"/>
                </div> */}
            </div>
            <div class="footer">
                {/* <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button> */}
            </div>
        </div>
       
    )       
}

export default Register