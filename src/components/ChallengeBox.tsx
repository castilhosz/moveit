import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
const { resetCountdown } = useContext(CountdownContext);

function handleChallengeSucceded() {
  completeChallenge()
  resetCountdown()
};

function handeChallengeFailed() {
  resetChallenge()
  resetCountdown()
};

  return(
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
            type='button'
            className={styles.challengeFailedButton}
            onClick={handeChallengeFailed}
            >Falhei</button>
            <button 
            type='button'
            className={styles.challengeSuccededButton}
            onClick={handleChallengeSucceded}
            >Completei</button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
      <p>
        <img src='icons/level-up.svg' alt='level up'/>
        Avance de level completando desafios
      </p>
      </div>
      )}
     
    </div>
  )
}