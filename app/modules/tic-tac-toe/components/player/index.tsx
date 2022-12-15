import { Group } from '@mantine/core'
import React from 'react'
import { TicTacToeType } from '../../store'
import User from './user'

interface Props {
  isNextX: boolean
  boardState: TicTacToeType[]
  winnerPlayer: TicTacToeType
}

const index = ({ isNextX, boardState, winnerPlayer }: Props) => {
  return (
    <Group position="center">
      {(['0', 'X'] as TicTacToeType[]).map((v) => {
        const active = !winnerPlayer
          ? v === 'X'
            ? isNextX
            : !isNextX
          : undefined
        const count = boardState.filter((f) => f === v).length
        return <User key={v} mark={v} isActive={active} counts={count} />
      })}
    </Group>
  )
}

export default index
