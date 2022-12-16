import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useEffect } from 'react'
import { TicTacToeType } from '../../hooks'
import Winner from './winner'
import Draw from './draw'

interface Props {
  winnerPlayer: TicTacToeType
  isGameEnd: boolean
}

const index = ({ winnerPlayer, isGameEnd }: Props) => {
  const [opened, handle] = useDisclosure(winnerPlayer !== null)

  useEffect(() => {
    if (!winnerPlayer && !isGameEnd) return
    handle.open()
  }, [winnerPlayer, isGameEnd])

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
      {winnerPlayer ? <Winner winnerPlayer={winnerPlayer} /> : <Draw />}
    </Modal>
  )
}

export default index
