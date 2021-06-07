import { useContext } from 'react'
import { FiLogOut } from 'react-icons/fi';

import { ChallengeContext } from '../contexts/ChallengeContext'
import { useUsername } from '../contexts/UsernameContext';

import styles from '../styles/components/Profile.module.css'

interface ProfileProps {
  username: string;
  user: string;
}

export function Profile(props: ProfileProps) {
  const name = props.user
  const username = props.username
  const { level } = useContext(ChallengeContext)

  const { removeUsername } = useUsername();

  function logout () {
    window.confirm('Você realmente gostaria de deslogar?') &&
    removeUsername()
    window.location.reload();
  }

  if (username=='guest') {
    return(
      <div 
      className={styles.profileContainer}
      >
        <img src={'/avatar.png'} alt={'Visitante'}/>
        <div>
          <strong>Visitante</strong>
          <button onClick={logout}>
            <FiLogOut/>
          </button>
          <p>
            <img src='icons/level.svg' alt='level'/>
            Level {level}
          </p>
        </div>
      </div>
    )} else {
    return(
      <div 
      className={styles.profileContainer}
      >
        <img src={`https://github.com/${username}.png`} alt={name}/>
        <div>
          <strong>{name}</strong>
          <button onClick={logout}>
            <FiLogOut/>
          </button>
          <p>
            <img src='icons/level.svg' alt='level'/>
            Level {level}
          </p>
        </div>
      </div>
    )
  }
}