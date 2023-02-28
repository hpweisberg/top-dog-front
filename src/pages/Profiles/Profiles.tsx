// npm packages
import { useState, useEffect } from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard';

// services
import * as profileService from '../../services/profileService'

// types
import { Profile } from '../../types/models'

interface ProfileProps {
  profiles: Profile[];
}

const Profiles = (props: ProfileProps): JSX.Element => {
  const { profiles } = props

  if(!profiles.length) return <p>No profiles yet</p>

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.map((profile: Profile) =>
        <ProfileCard key={profile.id} profile={profile}/>
      )}
    </>
  )
}

export default Profiles
