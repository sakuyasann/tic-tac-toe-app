import { IconBaseProps } from 'react-icons'
import {
  RiCheckboxBlankCircleLine,
  RiCloseFill,
  RiSettingsLine,
} from 'react-icons/ri'

import { FaInfo } from 'react-icons/fa'
import { ImBook } from 'react-icons/im'

export const ThemeIcons = {
  close: RiCloseFill,
  circle: RiCheckboxBlankCircleLine,
  changeLog: FaInfo,
  rule: ImBook,
  setting: RiSettingsLine,
} as const

export type ThemeIconName = keyof typeof ThemeIcons

export const GetThemeIcons = (name: ThemeIconName, props?: IconBaseProps) => {
  const Icon = ThemeIcons[name]
  return <Icon {...props} />
}
