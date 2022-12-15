import { ActionIcon, Box, Button, Group, Text } from '@mantine/core'
import React from 'react'
import { Dialog, GetThemeIcons, Modal } from '~/share'
import { TicTacToeType } from '../../store'
import { Timer } from '..'
import { useDisclosure } from '@mantine/hooks'
import { useNavigate } from '@remix-run/react'

interface Props {
  winnerPlayer: TicTacToeType
}

const index = (props: Props) => {
  const [opened, handle] = useDisclosure(false)
  const [dialogOpened, dialogHandle] = useDisclosure(false)

  const navigate = useNavigate()
  const handleGameEnd = () => {
    navigate('../', { replace: false })
  }

  return (
    <>
      <Group w={'100%'} px={'md'} position={'apart'}>
        <Box w={44}></Box>
        <Timer {...props} />
        <Box>
          <ActionIcon
            onClick={handle.open}
            size={'xl'}
            color={'violet'}
            variant={'transparent'}
          >
            {GetThemeIcons('setting', { size: 32 })}
          </ActionIcon>
        </Box>
      </Group>
      <Modal opened={opened} onClose={handle.close} title={'設定'}>
        <Group position="center">
          <Button color={'violet'} disabled>
            はじめから
          </Button>
          <Button color={'red'} onClick={dialogHandle.open}>
            ゲーム終了
          </Button>
        </Group>
      </Modal>
      <Dialog
        title="ゲーム終了"
        onSubmit={handleGameEnd}
        submitLabel={'終了'}
        onCancel={dialogHandle.close}
        opened={dialogOpened}
      >
        <Text>本当にゲームを終了しますか？</Text>
      </Dialog>
    </>
  )
}

export default index
