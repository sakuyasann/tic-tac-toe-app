import {
  Box,
  Center,
  Group,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core'
import Lottie from 'lottie-react'
import gameAnimation from '~/assets/lottie/welcome.json'
import startAnimation from '~/assets/lottie/start-button.json'
import { useNavigate } from '@remix-run/react'
import { ChangeLog, RuleBook } from './components'
import { ENV } from '~/share'

const index = () => {
  const navigate = useNavigate()
  const handlePlay = () => {
    navigate('/play', { replace: true })
  }

  return (
    <Stack mih={'100vh'} pos={'relative'}>
      <Center sx={{ flex: 1 }}>
        <Box>
          <Title align="center">
            TIC TAC TOE
            <br />
            GAME
          </Title>
          <Lottie animationData={gameAnimation} loop={false} />
          <Group position="center">
            <Box w={280}>
              <UnstyledButton onClick={handlePlay}>
                <Lottie animationData={startAnimation} />
              </UnstyledButton>
            </Box>
          </Group>
        </Box>
      </Center>
      <Group
        py={'xl'}
        px={'md'}
        position={'apart'}
        w={'100%'}
        pos={'absolute'}
        left={0}
        bottom={0}
      >
        <ChangeLog />
        <Text size={'xs'}>{ENV.VERSION}</Text>
        <RuleBook />
      </Group>
    </Stack>
  )
}

export default index
