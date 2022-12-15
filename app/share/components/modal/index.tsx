import { Modal, ModalProps, Title } from '@mantine/core'
import React from 'react'

const index = (props: ModalProps) => {
  return (
    <Modal
      centered
      {...props}
      title={<Title size={'h3'}>{props.title}</Title>}
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
