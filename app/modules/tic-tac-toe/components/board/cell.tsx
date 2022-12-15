import { Box, Center, Text, UnstyledButton } from '@mantine/core'
import React from 'react'
import { TicTacToeType } from '../../store'
import { Mark } from '../common'

interface Props {
  children?: React.ReactNode
  value: TicTacToeType
  onClick?: () => void
  power?: number
}

const size = [36, 56, 80]

const Cell = ({ children, onClick, value, power = 1 }: Props) => {
  return (
    <UnstyledButton onClick={onClick}>
      <Center
        bg={'dark.8'}
        sx={(theme) => ({
          borderRadius: theme.radius.lg,
          aspectRatio: '1/1',
          position: 'relative',
        })}
      >
        <Box>
          <Mark value={value} size={size[power - 1]} />
          {children}
        </Box>
        {power > 0 && (
          <Text pos={'absolute'} bottom={8} right={8} color={'dark.1'}>
            {power}
          </Text>
        )}
      </Center>
    </UnstyledButton>
  )
}

export default Cell
