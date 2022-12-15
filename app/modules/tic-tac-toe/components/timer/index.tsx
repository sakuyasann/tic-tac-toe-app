import { Text } from '@mantine/core'
import { useInterval } from '@mantine/hooks'
import React, { useEffect, useMemo, useState } from 'react'
import { TicTacToeType } from '../../store'

interface Props {
  winnerPlayer: TicTacToeType
}

const index = ({ winnerPlayer }: Props) => {
  const [seconds, setSeconds] = useState(0)
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000)

  useEffect(() => {
    interval.start()
    return interval.stop
  }, [])

  useEffect(() => {
    if (!winnerPlayer) return
    interval.stop()
  }, [winnerPlayer])

  const time = useMemo(() => {
    const minute = String(Math.floor(seconds / 60)).padStart(2, '0')
    const second = String(seconds % 60).padStart(2, '0')

    return `${minute}:${second}`
  }, [seconds])

  return (
    <Text align="center" size={'sm'} py={'xl'}>
      {time}
    </Text>
  )
}

export default index
