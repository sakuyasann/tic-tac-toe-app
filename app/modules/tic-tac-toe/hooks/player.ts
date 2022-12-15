import { useState } from 'react'

interface DeckType {
  1: number
  2: number
  3: number
  [x: string]: number
}

const DEFAULT_DECK: DeckType = {
  1: 5,
  2: 5,
  3: 5,
}

const DeckToArray = (obj: DeckType) => {
  return Object.keys(obj).flatMap((key) =>
    [...Array(obj[key])].map(() => parseInt(key))
  )
}

export const usePlayer = () => {
  const [deck, setDeck] = useState(handleShuffle(DeckToArray(DEFAULT_DECK)))
  const [hand, setHand] = useState<number[]>([])
  const [selectedHand, setSelectedHand] = useState(0)

  const handleDraw = (i: number = 1) => {
    if (deck.length === 0) return

    setDeck((deck) => {
      let after = deck.slice()

      while (i) {
        const item = after.shift()
        setHand((hand) => [...hand, item ?? 1])
        i--
      }

      return after
    })
  }

  const handleChangeSelectedHand = (i: number) => {
    if (hand.length < i || i < 0) return
    setSelectedHand(i)
  }

  const handleUseHand = (i: number = selectedHand) => {
    if (hand.length < i || i < 0) return

    const after = hand.slice()
    after.splice(i, 1)

    setHand(after)
    setSelectedHand(0)
    handleDraw()
  }

  return {
    deck,
    hand,
    handleDraw,
    selectedHand,
    handleChangeSelectedHand,
    handleUseHand,
  }
}

const handleShuffle = <T>(array: T[]) => {
  let newArr = array.slice()
  let length = array.length

  while (length) {
    const i = Math.floor(Math.random() * length)
    const item = newArr[--length]
    newArr[length] = newArr[i]
    newArr[i] = item
  }

  return newArr
}
