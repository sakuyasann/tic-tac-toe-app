import { createContext, useCallback, useState } from 'react'

export type TicTacToeType = '0' | 'X' | null
const DEFAULT_VALUE: TicTacToeType[] = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
]

interface ContextProps {
  board: TicTacToeType[]
  setBoard: (board: TicTacToeType[]) => void
}

const defaultBoardContext: ContextProps = {
  board: DEFAULT_VALUE,
  setBoard: () => {},
}

export const BoardContext = createContext(defaultBoardContext)

export const useBoard = () => {
  const [board, setValue] = useState(DEFAULT_VALUE)

  const setBoard = useCallback((current: TicTacToeType[]) => {
    setValue(current)
  }, [])

  return { board, setBoard }
}
