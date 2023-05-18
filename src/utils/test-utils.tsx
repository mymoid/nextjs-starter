import React, { ReactElement } from 'react'
// eslint-disable-next-line import/named
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@mymoid/ui-components'
import Layout from '@/components/Common/Layout'

// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

const Providers = ({ children }: { children: React.ReactElement }) => (
  <ThemeProvider>
    <Layout>{children}</Layout>
  </ThemeProvider>
)

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options })

export { customRender }
