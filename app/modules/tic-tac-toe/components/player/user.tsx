import { Box, Text } from '@mantine/core'
import { TicTacToeType } from '../../store'
import { Mark } from '../common'

interface Props {
  playerName?: string
  mark: TicTacToeType
  counts?: number
  isActive?: boolean
}

const User = ({ mark, counts, isActive }: Props) => {
  return (
    <Box
      bg={'dark.3'}
      sx={(theme) => ({
        borderRadius: theme.radius.lg,
        outlineStyle: 'solid',
        outlineWidth: 2,
        outlineColor: isActive ? theme.colors.violet[2] : 'transparent',
      })}
      p={'xl'}
    >
      <Box>
        <Mark value={mark} size={40} />
      </Box>
      <Text align="center" weight={700} size={'xl'}>
        {counts ?? 0}
      </Text>
    </Box>
  )
}

export default User
