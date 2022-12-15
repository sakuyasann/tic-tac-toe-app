import {
  Anchor,
  Box,
  Center,
  createStyles,
  UnstyledButton,
} from '@mantine/core'
import React from 'react'

interface Props {
  children?: React.ReactNode
  onClick?: () => void
}

const useStyles = createStyles((theme) => ({
  a: {
    padding: `1em`,
    boxShadow: `0 4px 0 ${theme.colors.violet[8]}`,
    backgroundColor: theme.colors.violet[5],
    color: 'white',
    borderRadius: '50%',
    aspectRatio: '1/1',
  },
}))

const index = ({ children, onClick }: Props) => {
  const { classes } = useStyles()

  return (
    <UnstyledButton onClick={onClick}>
      <Center className={classes.a}>{children}</Center>
    </UnstyledButton>
  )
}

export default index
