import React from 'react'
import { BoardContext, IsNextXContext, useBoard, useIsNextX } from '../../hooks'

interface Props {
  children?: React.ReactNode
}

const provider = ({ children }: Props) => {
  const board = useBoard()
  const isNextX = useIsNextX()

  return (
    <BoardContext.Provider value={board}>
      <IsNextXContext.Provider value={isNextX}>
        {children}
      </IsNextXContext.Provider>
    </BoardContext.Provider>
  )
}

export default provider
