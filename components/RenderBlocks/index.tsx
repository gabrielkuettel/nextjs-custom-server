import { Layout } from '../../types/cms'
import { components } from '../../blocks'
import { Container } from '../Container'

type Props = {
  layout: Layout
  className?: string
}

const RenderBlocks: React.FC<Props> = ({ layout, className }) => (
  <div className={className}>
    {layout?.map((block, i) => {
      if (block && !('blockType' in block)) {
        return null
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Block: React.FC<any> =
        components[block?.blockType as keyof typeof components]

      if (!Block) {
        return null
      }

      return (
        <section key={i}>
          <Container>
            <Block {...block} />
          </Container>
        </section>
      )
    })}
  </div>
)

export default RenderBlocks
