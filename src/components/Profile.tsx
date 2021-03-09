import { useContext } from 'react'

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

  return(
      <div 
      className={styles.profileContainer}
      >
        <img src={`https://github.com/${username}.png`} alt={name}/>
        <div>
          <strong>{name}</strong>
          <p>
            <img src='icons/level.svg' alt='level'/>
            Level {level}
          </p>
        </div>
      </div>
  )
}