import { Box, Button, Group } from '@mantine/core'
import React from 'react'
import { Modal } from '~/share'

interface Props {
  opened: boolean
  onCancel: () => void
  onSubmit: () => void
  submitLabel?: string
  title?: string
  children?: React.ReactNode
}

const index = ({
  opened,
  onCancel,
  onSubmit,
  submitLabel,
  children,
  title,
}: Props) => {
  return (
    <Modal title={title} opened={opened} onClose={onCancel}>
      <Box>{children}</Box>
      <Group position="center" mt={'lg'}>
        <Button onClick={onCancel} color={'red'} variant={'subtle'}>
          キャンセル
        </Button>
        <Button onClick={onSubmit} color={'violet'}>
          {submitLabel ?? '確定'}
        </Button>
      </Group>
    </Modal>
  )
}

export default index
