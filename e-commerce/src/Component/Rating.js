import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const Rating = ({Rating  , Reviews}) => {
  return (
    <div>
        <span>
        {Rating>=1?<StarIcon/>:Rating>=0.5?<StarHalfIcon/>:<StarBorderIcon/>}
      </span>

      <span>
        {Rating>=2?<StarIcon/>:Rating>=1.5?<StarHalfIcon/>:<StarBorderIcon/>}
      </span>

      <span>
        {Rating>=3?<StarIcon/>:Rating>=2.5?<StarHalfIcon/>:<StarBorderIcon/>}
      </span>

      <span>
        {Rating>=4?<StarIcon/>:Rating>=3.5?<StarHalfIcon/>:<StarBorderIcon/>}
      </span>

      <span>
        {Rating>=5?<StarIcon/>:Rating>=4.5?<StarHalfIcon/>:<StarBorderIcon/>}
      </span>
      <span>
        {`${Reviews} Reviews`}
      </span>
    </div>
  )
}

export default Rating
