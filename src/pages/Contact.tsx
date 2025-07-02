import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  input, textarea {
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    width: 100%;
  }

  button {
    padding: 1rem;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.accent};
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  button:hover {
    background-color: #3a7bc8;
  }
`;

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Сообщение отправлено!');
  };

  return (
    <section>
      <FormContainer>
        <h2>Свяжитесь со мной</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Имя" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Сообщение" rows={5} value={form.message} onChange={handleChange} required />
          <button type="submit">Отправить</button>
        </form>
      </FormContainer>
    </section>
  );
};

export default Contact;