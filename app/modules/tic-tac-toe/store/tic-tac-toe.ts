import { atom } from 'recoil'

export type TicTacToeType = '0' | 'X' | null

export const TicTacToeStore = atom<TicTacToeType[]>({
  key: 'TicTacToeStore',
  default: [null, null, null, null, null, null, null, null, null],
})

export const IsNextXStore = atom({
  key: 'IsNextXStore',
  default: false,
})
