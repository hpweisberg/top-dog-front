// assets
import bone from '../../assets/icons/bean.png'
import noBone from '../../assets/icons/noBean.png'

// types
import { Profile } from '../../types/models'

interface VoteManagerProps {
  profile: Profile;
}

const ratingOptions: [1, 2, 3, 4, 5] = [1, 2, 3, 4, 5]

const VoteManager = (props: VoteManagerProps): JSX.Element => {
  return ( 
    <section>
      {ratingOptions.map((rating: number): JSX.Element => (
        <img
          id={rating.toString()}
          key={rating}
          src={noBone}
          alt='Bone Symbol'
        />
      ))}
    </section>
  )
}

export default VoteManager