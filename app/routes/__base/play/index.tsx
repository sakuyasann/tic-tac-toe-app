import React from 'react'
import { GameModule } from '~/modules'
import { TicTacTocProvider } from '~/modules/tic-tac-toe/components'

const index = () => {
  return (
    <TicTacTocProvider>
      <GameModule />
    </TicTacTocProvider>
  )
}

export default index
