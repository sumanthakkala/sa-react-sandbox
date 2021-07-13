import React, { useState } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import './styles.scss'

interface Props {
  src: string
  isPoster: boolean
}

const Image: React.FC<Props> = ({ src = '', isPoster = false, ...props }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <>
      {!isImageLoaded && (
        <Skeleton
          className="skeleton"
          variant="rect"
          width={210}
          height={118}
        />
      )}
      <img
        src={src}
        alt="poster"
        onLoad={() => setIsImageLoaded(true)}
        className={isPoster !== undefined && isPoster ? 'poster' : 'backdrop'}
      />
    </>
  )
}

export default Image
