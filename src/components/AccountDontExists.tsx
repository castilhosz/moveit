import styles from '../styles/components/AccountDontExists.module.css'

export function AccountDontExists() {
  return(
    <div className={styles.container}>
      <p>Esse usuário não existe.</p>
    </div>
  )
}