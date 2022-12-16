import { Box, Center, Text } from '@mantine/core'
import Lottie from 'lottie-react'
import React from 'react'

import animation from '~/assets/lottie/game-end.json'

const Draw = () => {
  return (
    <Box pos={'relative'}>
      <Center>
        <Box>
          <Text align="center" size={32} weight={700} color={'violet.0'}>
            Draw
          </Text>
          <Lottie animationData={animation} />
        </Box>
      </Center>
    </Box>
  )
}

export default Draw
