import { Box, Center, createStyles, Modal, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React, { useEffect } from 'react'
import { TicTacToeType } from '../../hooks'
import Lottie from 'lottie-react'
import WinnerData from '~/assets/lottie/winner.json'
import StarAnimation from '~/assets/lottie/star-burst-animation.json'
import { Mark } from '../common'

interface Props {
  winnerPlayer: TicTacToeType
}

const index = ({ winnerPlayer }: Props) => {
  const [opened, handle] = useDisclosure(winnerPlayer !== null)

  useEffect(() => {
    if (!winnerPlayer) return
    handle.open()
  }, [winnerPlayer])

  return (
    <Modal
      opened={opened}
      onClose={handle.close}
      centered
      styles={(theme) => ({
        modal: {
          backgroundColor: theme.colors.dark[6],
        },
      })}
    >
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
    </Modal>
  )
}

export default index
