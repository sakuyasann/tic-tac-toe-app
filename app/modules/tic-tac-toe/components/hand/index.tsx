import {
  Box,
  Center,
  SimpleGrid,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core'
import { useEffect, useState } from 'react'
import { Mark } from '../common'

interface Props {
  player1: {
    deck: number[]
    hand: number[]
    handleChangeSelectedHand: (i: number) => void
    selectedHand: number
  }
  player2: {
    deck: number[]
    hand: number[]
    handleChangeSelectedHand: (i: number) => void
    selectedHand: number
  }
  isNextX: boolean
}

const size = [32, 40, 48]

const index = ({ player1, player2, isNextX }: Props) => {
  const [data, setData] = useState({
    hand: isNextX ? player1.hand : player2.hand,
    deck: isNextX ? player1.deck : player2.deck,
    select: isNextX ? player1.selectedHand : player2.selectedHand,
    change: isNextX
      ? player1.handleChangeSelectedHand
      : player2.handleChangeSelectedHand,
  })

  useEffect(() => {
    const hand = isNextX ? player1.hand : player2.hand
    const deck = isNextX ? player1.deck : player2.deck
    const select = isNextX ? player1.selectedHand : player2.selectedHand
    const change = isNextX
      ? player1.handleChangeSelectedHand
      : player2.handleChangeSelectedHand
    return setData({ hand, deck, select, change })
  }, [isNextX, player1, player2])

  return (
    <Box
      bg="dark.3"
      py={'md'}
      px={'md'}
      sx={(theme) => ({
        borderTopLeftRadius: theme.radius.lg,
        borderTopRightRadius: theme.radius.lg,
      })}
    >
      <SimpleGrid cols={4} spacing={'xs'}>
        {data.hand.map((v, i) => {
          return (
            <Center
              key={i}
              bg={'dark.8'}
              py={'lg'}
              sx={(theme) => ({
                borderRadius: theme.radius.lg,
                outlineStyle: 'solid',
                outlineWidth: 2,
                outlineColor:
                  data['select'] === i ? theme.colors.violet[2] : 'transparent',
              })}
            >
              <UnstyledButton
                w={'100%'}
                h={'100%'}
                onClick={() => data.change(i)}
              >
                <Stack spacing={'sm'} h={'100%'}>
                  <Box h={size[2]}>
                    <Center h={'100%'} sx={{ flex: 1 }}>
                      <Mark value={isNextX ? 'X' : '0'} size={size[v - 1]} />
                    </Center>
                  </Box>
                  <Text
                    align="center"
                    size={'xl'}
                    weight={700}
                    color={'violet.0'}
                  >
                    {v}
                  </Text>
                </Stack>
              </UnstyledButton>
            </Center>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

export default index
