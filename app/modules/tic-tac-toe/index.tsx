import { motion } from 'framer-motion'
import { Box, Stack } from '@mantine/core'
import React from 'react'
import { Board, Player, Hand, Timer, GameEnd, Header } from './components'
import { useTicTacToc } from './hooks'

const index = () => {
  const engin = useTicTacToc()

  return (
    <>
      <Stack spacing={'xl'} mih={'100%'}>
        <Header {...engin} />
        <Stack py={'md'} px={'md'} spacing={'xl'} sx={{ flex: 1 }}>
          <Player {...engin} />
          <Board {...engin} />
        </Stack>
        <Hand {...engin} />
      </Stack>
      <GameEnd {...engin} />
    </>
  )
}

export default index
