import React from 'react'
import RichText from '../../components/RichText'
import classes from './index.module.css'

export type Type = {
  blockType: 'spacer'
  blockName?: string
  content: unknown
}

export const Component: React.FC<Type> = ({ content }) => {
  return (
    <div className={classes.wrap}>
      <RichText content={content} className={classes.content} />
    </div>
  )
}
