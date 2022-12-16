import { Box, Center, Stack, Text } from '@mantine/core'
import Lottie from 'lottie-react'
import React from 'react'
import WinnerData from '~/assets/lottie/winner.json'
import StarAnimation from '~/assets/lottie/star-burst-animation.json'
import { TicTacToeType } from '../../hooks'
import { Mark } from '../common'

interface Props {
  winnerPlayer: TicTacToeType
}

const Winner = ({ winnerPlayer }: Props) => {
  return (
    <Box pos={'relative'}>
      <Center
        opacity={0.5}
        w={'100%'}
        h={'100%'}
        pos={'absolute'}
        bottom={72}
        left={0}
      >
        <Lottie animationData={StarAnimation} />
      </Center>

      <Center w={'100%'} h={'100%'} pos={'absolute'} bottom={40} left={0}>
        <Stack>
          <Center w={'100%'}>
            <Mark value={winnerPlayer ?? '0'} size={96} />
          </Center>
          <Text size={32} weight={700} color={'violet.0'}>
            {winnerPlayer === '0' ? 'Player1' : 'Player 2'}
          </Text>
        </Stack>
      </Center>

      <Lottie animationData={WinnerData} loop={false} />
    </Box>
  )
}

export default Winner
