import NextImage from 'next/image'
import RichText from '../../components/RichText'
import classes from './index.module.css'
import sizes from './sizes.json'
import { Media } from '../../types/payload-types'

export type Type = {
  blockType: 'image'
  blockName?: string
  image: Media
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  caption?: any
  type: 'card' | 'feature'
}

export const Component: React.FC<Type> = (props) => {
  const { image, type, caption } = props

  if (typeof image === 'object') {
    let filenameToRender = image.filename
    let { width } = image
    let { height } = image

    if (image.sizes?.[type]) {
      filenameToRender = image.sizes[type]?.filename || ''
      width = image.sizes[type]?.width
      height = image.sizes[type]?.height
    }

    const sizesToUse = sizes
      .map((size) => `(max-width: ${size}px) ${size}px`)
      .join(', ')

    return (
      <div className={`${classes.wrap} ${classes[type]}`}>
        <NextImage
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${filenameToRender}`}
          alt={image.alt}
          sizes={sizesToUse}
          width={width}
          height={height}
        />
        {caption && <RichText className={classes.caption} content={caption} />}
      </div>
    )
  }

  return null
}
