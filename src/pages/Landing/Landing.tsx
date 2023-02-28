// stylesheets
import styles from './Landing.module.css'

// services
import * as authService from '../../services/authService'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
  handleLogout: () => void;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user, handleLogout } = props

  const handleDeleteAccount = async (): Promise<void> => {
    await authService.deleteAccount()
    handleLogout()
  }
  return (
    <main className={styles.container}>
      <h1>TOP DOG</h1>
      {user &&
        <button onClick={handleDeleteAccount}>
          DELETE ACCOUNT
        </button>
      }
    </main>
  )
}

export default Landing
