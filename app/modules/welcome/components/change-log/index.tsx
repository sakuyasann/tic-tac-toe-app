import { List, Timeline, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import { GetThemeIcons, IconButton, Modal } from '~/share'

const DUMMY = [
  {
    title: `FEATURES`,
    message: [
      {
        type: 'update',
        message: 'オンライン対戦機能',
      },
      {
        type: 'update',
        message: '対戦記録の保存',
      },
    ],
  },
  {
    title: `2022.12.15_0.1.0`,
    message: [
      {
        type: 'update',
        message: 'ベータ公開',
      },
    ],
  },
]

const index = () => {
  const [opened, handle] = useDisclosure(false)
  const [data, setData] = useState(DUMMY)

  return (
    <>
      <IconButton onClick={handle.open}>
        {GetThemeIcons('changeLog')}
      </IconButton>
      <Modal
        opened={opened}
        onClose={handle.close}
        centered
        title={<Title size={'h3'}>変更履歴</Title>}
      >
        <Timeline
          color="violet"
          active={0}
          reverseActive
          bulletSize={12}
          styles={(theme) => ({
            itemTitle: {
              fontSize: theme.fontSizes.md,
            },
            itemBody: {
              color: theme.colors.violet[0],
            },
          })}
        >
          {data.map((item, i) => {
            return (
              <Timeline.Item key={i} title={item.title}>
                <List
                  styles={(theme) => ({
                    item: {
                      color: theme.colors.violet[0],
                      fontSize: theme.fontSizes.sm,
                    },
                  })}
                >
                  {item.message.map((mess, i) => {
                    return <List.Item key={i}>{mess.message}</List.Item>
                  })}
                </List>
              </Timeline.Item>
            )
          })}
        </Timeline>
      </Modal>
    </>
  )
}

export default index
