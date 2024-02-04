"use client";

import { useState,useEffect } from "react";
import Image from "next/image";
import "./SubmitForm.css";
import Baloon1 from "../../../public/assets/images/balloon1.png";
import Baloon2 from "../../../public/assets/images/balloon2.png";
import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SubmitForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

 useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setName(savedData.name || "");
      setEmail(savedData.email || "");
      setMessage(savedData.message || "");
    }
  }, []);

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);

    if (!newName || /\d/.test(newName) || !/^[a-zA-Z]+$/.test(newName)) {
      setNameError("Nieprawidłowe Іmię");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newEmail || !emailRegex.test(newEmail)) {
      setEmailError("Nieprawidłowy email");
    } else {
      setEmailError("");
    }
  };

  const handleMessageChange = (event) => {
    const newMessage = event.target.value;
    setMessage(newMessage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || nameError || emailError) {
      setNameError("Wpisz imię");
      setEmailError("Wprowadź adres e-mail");
      setFormSubmitted(true);
      return;
    }
    const formData = { name, email, message };
    localStorage.setItem("formData", JSON.stringify(formData));

    setName("");
    setEmail("");
    setMessage("");
    setFormSubmitted(true);
    toast.success("Dane przesłane pomyślnie !", {
      position: "bottom-right",
    });
  };

  return (
    <div className='wrapper'>
      

      <Image
        src={Baloon1}
        alt='air baloon'
        width={398}
        height={404}
        className='img-baloon first'
        priority
      />
      <Image
        src={Baloon2}
        alt='air baloon'
        width={460}
        height={469}
        className='img-baloon second'
        priority
      />
      <form onSubmit={handleSubmit} className='form'>
        <div className='container'>
          <div className='form-group'>
            <p>Imię*:</p>
            <input
              type='text'
              id='name'
              value={name}
              onChange={handleNameChange}
              placeholder='Imię'
              autoComplete='name'
              className={
                nameError || (formSubmitted && !name) ? "errorBcg" : ""
              }
            />
            {(nameError || (formSubmitted && !name)) && (
              <span className='error'>{nameError}</span>
            )}
          </div>
          <div className='form-group'>
            <p>E-mail*:</p>
            <input
              type='email'
              id='email'
              value={email}
              onChange={handleEmailChange}
              placeholder='mail@gmail.com'
              autoComplete='email'
              className={
                emailError || (formSubmitted && !email) ? "errorBcg" : ""
              }
            />
            {(emailError || (formSubmitted && !email)) && (
              <span className='error'>{emailError}</span>
            )}
          </div>

          <div className='form-textarea'>
            <p>Wiadomość</p>
            <textarea
              id='message'
              value={message}
              onChange={handleMessageChange}
              placeholder='Twoja wiadomość...'
            />
          </div>

          <button
            type='submit'
            disabled={nameError || emailError}
            className='form-btn'
          >
            Wyślij
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
    
  );
};

export default SubmitForm;
