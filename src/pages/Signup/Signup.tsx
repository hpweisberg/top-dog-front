// npm packages
import { useState } from 'react'

// components
import SignupForm from '../../components/SignupForm/SignupForm'

// stylesheets
import styles from './Signup.module.css'

// types
interface SignupProps {
  handleAuthEvt: () => void;
}

const Signup = (props: SignupProps): JSX.Element => {
  const [message, setMessage] = useState('')

  const updateMessage = (msg: string): void => setMessage(msg)

  return (
    <main className={styles.container}>
      <div className={styles.formContainer}>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
      </div>
    </main>
  )
}

export default Signup
