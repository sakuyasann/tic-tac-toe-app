import { useMantineTheme } from '@mantine/core'
import React, { useMemo } from 'react'
import { GetThemeIcons } from '~/share'
import { TicTacToeType } from '../../store'

interface Props {
  value: TicTacToeType
  size?: number
}

const ICON_SIZE = 64

const mark = ({ value, size }: Props) => {
  const theme = useMantineTheme()
  const Components = useMemo(() => {
    if (value === '0')
      return GetThemeIcons('circle', {
        color: theme.colors.violet[7],
        size: size ?? ICON_SIZE,
      })
    if (value === 'X')
      return GetThemeIcons('close', {
        color: theme.colors.violet[0],
        size: size ?? ICON_SIZE,
      })
    return <></>
  }, [value, size])

  return <>{Components}</>
}

export default mark
