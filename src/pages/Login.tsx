// Login.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { apiClient } from '../services/config';
import FacebookComponente from '../components/FacebookComponente';
import GoogleComponente from '../components/GoogleComponente';
import AuthCard from '../components/AuthCard';
import Input from '../components/Inputs';

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });

  useEffect(() => {
    if (token) {
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      navigate('/home');
    }
  }, [token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const loginForm = (
    <form onSubmit={handleSubmit}>
      <Input
        id="username"
        name="username"
        type="text"
        placeholder="Email ou nome de usuário"
        value={formData.username}
        onChange={handleChange}
        
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Senha"
        value={formData.password}
        onChange={handleChange}
        
      />
      <div className="mt-3 flex justify-between items-center mb-5">
        <div className="flex items-center">
          <input className="h-4 w-4" type="checkbox" />
          <label htmlFor="" className="font-semibold ml-2">
            Lembrar de mim
          </label>
        </div>
        <div>
          <a href="#" className="font-bold">
            Esqueceu a senha?
          </a>
        </div>
      </div>
      <div className="mb-4">
        <GoogleComponente />
      </div>
      <div>
        <FacebookComponente />
      </div>
      <div className="flex justify-center mt-5">
        <button
          type="submit"
          className="border-2 bg-[#7B66FD] text-white rounded-md py-1 w-48 text-xl border-black"
        >
          Entrar
        </button>
      </div>
    </form>
  );

  const loginFooter = (
    <div className="mt-3 flex justify-center">
      <h1 className="font-bold">Não tem uma conta? </h1>
      <a href="/registro" className="text-[#7B66FD] ml-2">
        Inscreva-se
      </a>
    </div>
  );

  return (
    <div>
      <header className="h-14 bg-[#B5B5B5] border-b-2 border-black flex items-center pl-4">
        <h1>Logo</h1>
      </header>
      <div className="flex justify-center items-center mt-48">
        <AuthCard title="Login" form={loginForm} footer={loginFooter} />
      </div>
    </div>
  );
};

export default Login;
