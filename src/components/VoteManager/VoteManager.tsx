import { useState } from 'react'

// assets
import bone from '../../assets/icons/bone.png'
import noBone from '../../assets/icons/noBone.png'

// types
import { Profile } from '../../types/models'
import { VoteManagerFormData } from '../../types/forms'

interface VoteManagerProps {
  profile: Profile;
  handleVote: (formData: VoteManagerFormData) => void;
}


const VoteManager = (props: VoteManagerProps): JSX.Element => {
  const { profile, handleVote } = props
  const [hover, setHover] = useState<string | null>(null)

  const handleHover = (evt: React.MouseEvent): void => {
    if (evt.type === 'mouseover'){
      setHover(evt.currentTarget.id)
    } else if (evt.type === 'mouseleave') {
      setHover(null)
    }
  }
  
  const ratingOptions: [1, 2, 3, 4, 5] = [1, 2, 3, 4, 5]
  const voteCount = profile.votesReceived.length
  let voteSum = 0

  profile.votesReceived.forEach(vote => voteSum += vote.value)

  const profileRating = voteCount ? voteSum / voteCount : 1

  const handleClick = (evt: React.MouseEvent<HTMLImageElement>): void => {
    const newValue = parseInt(evt.currentTarget.id)
    handleVote({ value: newValue, profileId: profile.id })
  }

  return ( 
    <section>
      {ratingOptions.map((rating: number): JSX.Element => (
        <img
          id={rating.toString()}
          key={rating}
          onClick={handleClick}
          src={rating <= (hover ?? profileRating) ? bone : noBone}
          alt='Bone Symbol'
          onMouseOver={handleHover}
          onMouseLeave={handleHover}
        />
      ))}
    </section>
  )
}

export default VoteManager