import { Layout } from '../../collections/Pages'
import { components } from '../../blocks'
import { Container } from '../Container'

type Props = {
  layout: Layout[]
  className?: string
}

const RenderBlocks: React.FC<Props> = ({ layout, className }) => (
  <div className={className}>
    {layout.map((block, i) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Block: React.FC<any> =
        components[block.blockType as keyof typeof components]

      if (Block) {
        return (
          <section key={i}>
            <Container>
              <Block {...block} />
            </Container>
          </section>
        )
      }

      return null
    })}
  </div>
)

export default RenderBlocks
