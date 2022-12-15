import { SimpleGrid } from '@mantine/core'
import { TicTacToeType } from '../../store'
import Cell from './cell'

interface Props {
  boardState: TicTacToeType[]
  boardStrength: number[]
  handleClick: (target: number) => void
}

const index = ({ boardState, handleClick, boardStrength }: Props) => {
  return (
    <SimpleGrid
      cols={3}
      bg={'dark.3'}
      p={'sm'}
      sx={(theme) => ({ borderRadius: theme.radius.lg })}
      spacing={'sm'}
    >
      {boardState.map((state, i) => {
        return (
          <Cell
            power={boardStrength[i]}
            key={i}
            value={state}
            onClick={() => handleClick(i)}
          />
        )
      })}
    </SimpleGrid>
  )
}

export default index
