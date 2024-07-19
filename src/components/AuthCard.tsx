import React from 'react';

interface AuthCardProps {
  title: string;
  form: React.ReactNode;
  footer: React.ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({ title, form, footer }) => {
  return (
    <div className="w-96 p-6 rounded-3xl drop-shadow-5xl border bg-[#EFEFEF]">
      <h1 className="mb-10 text-3xl block text-center font-semibold">{title}</h1>
      {form}
      {footer}
    </div>
  );
};

export default AuthCard;
