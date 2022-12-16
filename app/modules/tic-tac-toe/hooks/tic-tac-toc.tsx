import { useContext, useEffect, useState } from 'react'
import { TicTacToeType } from '../store'
import { BoardContext, IsNextXContext, usePlayer } from '.'

interface TicTacToeOptionType {
  startPlayer: 0 | 1
  timeLimit: number
}

const DEFAULT_HAND = 4

export const useTicTacToc = (options?: TicTacToeOptionType) => {
  const [started, setStarted] = useState(false)
  const { board: boardState, setBoard } = useContext(BoardContext)
  const { isNextX, setIsNextX } = useContext(IsNextXContext)
  const [boardStrength, setBoardStrength] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ])

  // 盤面のマスが埋まっていれば終了
  const [isGameEnd, setIsGameEnd] = useState(false)

  // Player1 0
  const player1 = usePlayer()
  // Player2 X
  const player2 = usePlayer()

  // 開始時デッキをシャッフル
  useEffect(() => {
    player1.handleDraw(DEFAULT_HAND)
    player2.handleDraw(DEFAULT_HAND)
    return setStarted(true)
  }, [])

  useEffect(() => {
    if (!started) return
    console.log('player1', player1.hand)
    console.log('player2', player2.hand)
  }, [player1.hand, player2.hand])

  // 勝者プレイヤー
  const [winnerPlayer, setWinnerPlayer] = useState<TicTacToeType>(null)

  // 勝敗がついたかの確認
  useEffect(() => {
    const winner = calculateWinner(boardState)
    if (!winner) return

    return setWinnerPlayer(winner)
  }, [isNextX])

  // 盤面がクリックされた時の処理
  const handleClick = (target: number) => {
    // 既に勝敗が決まっていれば無効
    if (winnerPlayer || isGameEnd) return

    // 盤面の強さを確認し、上書きできるか確認
    const player = isNextX ? player1 : player2
    const power = player.hand[player.selectedHand]

    const boardPower = boardStrength[target]

    if (boardPower >= power) return

    // 上書き処理
    const newPawer = boardStrength.slice()
    const newState = boardState.slice()

    newState[target] = isNextX ? 'X' : '0'
    newPawer[target] = power

    player.handleUseHand()

    setBoard(newState)
    setBoardStrength(newPawer)
    setIsNextX(!isNextX)
  }

  useEffect(() => {
    setIsGameEnd(boardState.filter((f) => f === null).length === 0)
  }, [boardState])

  return {
    boardState,
    boardStrength,
    handleClick,
    winnerPlayer,
    isNextX,
    player1,
    player2,
    isGameEnd,
  }
}

const calculateWinner = (squares: TicTacToeType[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
}
