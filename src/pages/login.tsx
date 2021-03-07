import { useContext,  } from 'react';
import Link from 'next/link'
import Head from 'next/head';

import { UsernameContext } from '../contexts/UsernameContext';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  const {username, setUsername, handleChange} = useContext(UsernameContext)

  /*const handleChange = (e) => {
    e.preventDefault();
    registerUsername;
  }*/

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
          
          <form>
            <input 
            placeholder='Digite seu username'
            type='text'
            value={username}
            onChange={handleChange}
            />
            <Link href='/'>
            <button type="submit">
              <img src="/icons/vector.svg" alt=""/>
            </button>
            </Link>
          </form>
        </div>
      </section>
    </div>
  )}