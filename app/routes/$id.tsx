import { useNavigate } from '@remix-run/react'
import React, { useEffect } from 'react'

const $id = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/play', { replace: true })
  }, [])
  return <></>
}

export default $id
