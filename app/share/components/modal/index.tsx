import { Modal, ModalProps, Text } from '@mantine/core'
import React from 'react'

const index = (props: ModalProps) => {
  return (
    <Modal
      centered
      {...props}
      title={<Text size={'xl'}>{props.title}</Text>}
      styles={(theme) => ({
        modal: {
          backgroundColor: theme.colors.dark[6],
          color: theme.colors.violet[0],
        },
      })}
    />
  )
}

export default index
