import { MantineThemeOverride } from '@mantine/core'

const FONT_FAMILY = `'Audiowide', 'Stick', cursive`

export const LibMantineTheme: MantineThemeOverride = {
  fontFamily: FONT_FAMILY,
  headings: {
    fontFamily: FONT_FAMILY,
    fontWeight: 400,
  },
  globalStyles(theme) {
    return {
      body: {
        background: theme.colors.dark[7],
        color: theme.colors.gray[0],

        // backgroundColor: `hsla(225,7%,10%,1)`,
        backgroundImage: `
        radial-gradient(at 79% 3%, hsla(222,7%,18%,1) 0px, transparent 50%),
        radial-gradient(at 44% 66%, hsla(222,7%,18%,1) 0px, transparent 50%),
        radial-gradient(at 36% 30%, hsla(222,7%,18%,1) 0px, transparent 50%),
        radial-gradient(at 15% 30%, hsla(222,7%,18%,1) 0px, transparent 50%),
        radial-gradient(at 84% 53%, hsla(221,5%,38%,1) 0px, transparent 50%),
        radial-gradient(at 58% 84%, hsla(221,5%,38%,1) 0px, transparent 50%),
        radial-gradient(at 32% 98%, hsla(255,53%,50%,1) 0px, transparent 50%),
        radial-gradient(at 90% 10%, hsla(255,66%,55%,1) 0px, transparent 50%)
      `,
      },
    }
  },
}
