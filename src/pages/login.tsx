import Head from 'next/head';
import Router from 'next/router'

import { useUsername } from '../contexts/UsernameContext';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  const { username, setUsername, usernameOnCookies, requestApi } = useUsername()
  console.log(username);

  const handleChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  }

  async function handleSubmit (e) {
    e.preventDefault();

    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    const result = await response.json();

    if(!result.login) {
      alert('O usuário não foi encontrado')
    } else {
      usernameOnCookies();
      requestApi();
      Router.push('/');
     }
  }

  return(
    <div className={styles.container}>
      <Head>
        <title> Login | move.it</title>
      </Head>
      
      <section>
        <div/>
        <div className={styles.rightContainer}>

          <img src="/logo.svg" alt="move.it"/>
          <h1>Bem-vindo</h1> 

          <div className={styles.git}>
            <img src="/github.svg" alt="Github" width='40'/>
            <p>Faça login com seu Github para começar</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <input 
            placeholder='Digite seu username'
            type='text'
            value={username}
            onChange={handleChange}
            />
            <button type="submit">
              <img src="/icons/vector.svg" alt=""/>
            </button>
          </form>
        </div>
      </section>
    </div>
  )}