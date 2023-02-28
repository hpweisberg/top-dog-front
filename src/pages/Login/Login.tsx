// npm modules
import { useState } from 'react'

// components
import LoginForm from '../../components/LoginForm/LoginForm'

// stylesheets
import styles from './Login.module.css'

// types
interface LoginPageProps {
  handleAuthEvt: () => void;
}

const LoginPage = (props: LoginPageProps): JSX.Element => {
  const [message, setMessage] = useState('')

  const updateMessage = (msg: string): void => setMessage(msg)

  return (
    <main className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Log In</h1>
        <p>{message}</p>
        <LoginForm {...props} updateMessage={updateMessage} />
      </div>
    </main>
  )
}

export default LoginPage
