import { Group, List, Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { GetThemeIcons, IconButton, Modal } from '~/share'

const index = () => {
  const [opened, handle] = useDisclosure(false)

  return (
    <>
      <IconButton onClick={handle.open}>{GetThemeIcons('rule', {})}</IconButton>
      <Modal
        opened={opened}
        onClose={handle.close}
        centered
        title={<Title size={'h3'}>ルールブック</Title>}
      >
        <Text>
          このゲームは三目並べをベースに、運要素と戦略を追加したゲームです
        </Text>
        <List
          type="ordered"
          mt={'xl'}
          spacing={'md'}
          styles={(theme) => ({
            item: {
              color: theme.colors.violet[0],
            },
          })}
        >
          <List.Item>お互いのプレイヤーは最初に手札を4枚持っています</List.Item>
          <List.Item>
            各マークにはそれぞれ数字を持っており、フィールドに既に埋まっているマスでも数字が大きければ上書きすることができます
          </List.Item>
          <List.Item>
            交互にマスを埋めていき、先に縦、横、斜め
            いずれかに同じマークが揃った方が勝ちです
          </List.Item>
          <List.Item>
            マスが全て埋まり、勝敗が決まっていないときは引き分けになります
          </List.Item>
        </List>
        <Group position="center" mt={'lg'}>
          <IconButton onClick={handle.close}>
            <Text size={'xs'}>Close</Text>
          </IconButton>
        </Group>
      </Modal>
    </>
  )
}

export default index
