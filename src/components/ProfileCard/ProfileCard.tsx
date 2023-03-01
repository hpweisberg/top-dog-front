// assets
import defaultPic from '../../assets/icons/profile.png'
import { VoteManagerFormData } from '../../types/forms';

// types
import { Profile } from '../../types/models'

// components
import VoteManager from '../VoteManager/VoteManager'

import styles from './ProfileCard.module.css'

import * as profileService from '../../services/profileService'

interface ProfileCardProps {
  profile: Profile;
  handleVote: (formdata: VoteManagerFormData) => void;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile } = props

  const profilePic = profile.photo ? profile.photo : defaultPic

  // console.log('https://api.giphy.com/v1/gifs/search?api_key=IfgvP9VTkIms4RzChFncxNCr3yiXb38T&q=dog&limit=25&offset=0&rating=g&lang=en')
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