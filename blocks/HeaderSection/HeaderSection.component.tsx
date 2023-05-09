/* eslint-disable @next/next/no-img-element */
import { HeaderSection } from '../../components/HeaderSection'

export type HeaderSectionProps = {
  blockType: string
  blockName?: string
  title: string
  description: string
}

export const HeaderSectionComponent: React.FC<HeaderSectionProps> = ({
  title,
  description
}) => {
  return <HeaderSection title={title} description={description} />
}
