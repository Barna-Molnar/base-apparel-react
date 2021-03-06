import './App.scss';
import React, { useState, useEffect } from 'react';
import validator from 'validator';

function App() {
  const [emailError, setEmailError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    console.log('run');
    if (!inputValue) {
      setHidden(true);
      setEmailError('');
      return;
    }
    setEmailError('Please provide a valid Email!');
  }, [inputValue]);

  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('Valid Email ');
      setHidden(true);
    } else {
      setEmailError('Please provide a valid Email!');
    }
  };

  return (
    <div className="App">
      <section className="container">
        <header className="header">
          <img className="header__logo" src="./images/logo.svg" alt="" />
          <img
            className="header__hero "
            id="header__hero"
            src="./images/hero-mobile.jpg"
            alt=""
          />
        </header>
        <h1 className="container__title">
          <span className="highlight">We're </span>coming soon
        </h1>
        <p className="container__text">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <div className="form__wrapper">
          <form action="">
            <label htmlFor="email">
              <input
                onChange={(e) => {
                  setHidden(false);
                  setInputValue(e.target.value);
                  validateEmail(e);
                }}
                className="container__inputField"
                type="email"
                placeholder="  Email Address"
                required
                value={inputValue}
              />
            </label>
            <img
              className={`icon__error ${hidden ? `hidden` : 'visible'} `}
              src="./images/icon-error.svg"
              alt=""
            />
            <button
              onClick={(e) => {
                if (inputValue === '') {
                  e.preventDefault();
                  setEmailError('Please provide a valid Email!');
                  setHidden(false);
                  return;
                }
                e.preventDefault();
                e.target.value = '';
                setInputValue('');
                setHidden(true);
              }}
            >
              <img src="./images/icon-arrow.svg" alt="" />
            </button>
          </form>
        </div>
        <div className="emailError">{emailError}</div>
      </section>
      <section className="image__container">
        <img src="./images/hero-desktop.jpg" alt="yah"></img>
      </section>

      {/* <footer>
        <p className="attribution">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="#">BARNABAS MOLNAR</a>.
        </p>
      </footer> */}
    </div>
  );
}

export default App;
