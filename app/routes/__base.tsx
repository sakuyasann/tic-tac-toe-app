import { Box, Center } from '@mantine/core'
import { Outlet } from '@remix-run/react'
import React from 'react'

const __base = () => {
  return (
    <Center>
      <Box w={'100%'} maw={480}>
        <Outlet />
      </Box>
    </Center>
  )
}

export default __base
