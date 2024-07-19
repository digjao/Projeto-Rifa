// RegistrationForm.tsx
import React, { useState } from 'react';
import AuthCard from '../components/AuthCard';
import Input from '../components/Inputs';
import FacebookComponente from '../components/FacebookComponente';
import GoogleComponente from '../components/GoogleComponente';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ fullName: '', emailOrPhone: '', username: '', password: '' });
  const [errors, setErrors] = useState({ fullName: '', emailOrPhone: '', username: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  };

  const registrationForm = (
    <form onSubmit={handleSubmit}>
      <Input
        id="fullName"
        name="fullName"
        type="text"
        placeholder="Nome completo"
        value={formData.fullName}
        onChange={handleChange}
        errorMessage={errors.fullName}
      />
      <Input
        id="emailOrPhone"
        name="emailOrPhone"
        type="text"
        placeholder="Email ou telefone"

        value={formData.emailOrPhone}
        onChange={handleChange}
        errorMessage={errors.emailOrPhone}
      />
      <Input
        id="username"
        name="username"
        type="text"
        placeholder="Nome de usuário"
        value={formData.username}
        onChange={handleChange}
        errorMessage={errors.username}
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Senha"
        value={formData.password}
        onChange={handleChange}
        errorMessage={errors.password}
      />
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
          Criar conta
        </button>
      </div>
    </form>
  );

  const registrationFooter = (
    <div className="mt-3 flex justify-center">
      <h1 className="font-bold">Já tem uma conta? </h1>
      <a href="/login" className="text-[#7B66FD] ml-2">
        Entrar
      </a>
    </div>
  );

  return (
    <div>
      <header className="h-14 bg-[#B5B5B5] border-b-2 border-black flex items-center pl-4">
        <h1>Logo</h1>
      </header>
      <div className="flex justify-center items-center mt-48">
        <AuthCard title="Crie sua conta" form={registrationForm} footer={registrationFooter} />
      </div>
    </div>
  );
};

export default RegistrationForm;
