import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { MantineProvider, createEmotionCache } from '@mantine/core'
import { StylesPlaceholder } from '@mantine/remix'
import { LibMantineTheme } from './share'
import { RecoilRoot } from 'recoil'
import manifest from '../public/manifest.webmanifest'
import { AnimatePresence, motion } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1,user-scalable=no',
})

export const links: LinksFunction = () => {
  return [
    { rel: 'manifest', href: manifest },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Audiowide&family=Stick&display=swap',
    },
  ]
}

createEmotionCache({ key: 'mantine' })

export default function App() {
  return (
    <MantineProvider theme={LibMantineTheme} withGlobalStyles withNormalizeCSS>
      <html lang="en">
        <head>
          <StylesPlaceholder />
          <Meta />
          <Links />
        </head>
        <body>
          <RecoilRoot>
            <AnimatePresence mode="wait">
              <motion.div exit={{ opacity: 0 }}>
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </RecoilRoot>
          <Analytics />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  )
}
