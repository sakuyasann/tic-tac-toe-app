import { createContext, useCallback, useState } from 'react'

const DEFAULT_VALUE: boolean = false

interface ContextProps {
  isNextX: boolean
  setIsNextX: (isNext: boolean) => void
}

const defaultIsNextContext: ContextProps = {
  isNextX: DEFAULT_VALUE,
  setIsNextX: () => {},
}

export const IsNextXContext = createContext(defaultIsNextContext)

export const useIsNextX = (): ContextProps => {
  const [isNextX, setValue] = useState(DEFAULT_VALUE)

  const setIsNextX = useCallback((current: boolean): void => {
    setValue(current)
  }, [])

  return { isNextX, setIsNextX }
}
