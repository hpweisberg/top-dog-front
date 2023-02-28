// assets
import defaultPic from '../../assets/icons/profile.png'
import { VoteManagerFormData } from '../../types/forms';

// types
import { Profile } from '../../types/models'

// components
import VoteManager from '../VoteManager/VoteManager'

import styles from './ProfileCard.module.css'

interface ProfileCardProps {
  profile: Profile;
  handleVote: (formdata: VoteManagerFormData) => void;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile } = props

  const profilePic = profile.photo ? profile.photo : defaultPic

  return (
    <div className={styles.cardContainer}>

      <article>
        <img src={profilePic} alt={`${profile.name}'s avatar`} />
        <h1>{profile.name}</h1>

        <VoteManager {...props} />
      </article>
    </div>
  )
}

export default ProfileCard