// npm packages
import { useState, useEffect } from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard';

// services
import * as profileService from '../../services/profileService'
import { VoteManagerFormData } from '../../types/forms';

// types
import { Profile } from '../../types/models'

interface ProfileProps {
  profiles: Profile[];
  handleVote: (formData: VoteManagerFormData) => void;
}

const Profiles = (props: ProfileProps): JSX.Element => {
  const { profiles } = props

  if(!profiles.length) return <p>No profiles yet</p>

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.map((profile: Profile) =>
        <ProfileCard 
        key={profile.id} 
        profile={profile}
        handleVote={props.handleVote}
        />
      )}
    </>
  )
}

export default Profiles
