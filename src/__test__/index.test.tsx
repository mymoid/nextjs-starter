import { screen } from '@testing-library/react'
import { customRender } from '@/utils/test-utils'
import Home from '@/pages'

jest.mock('@/hooks/useUser', () => {
  return jest.fn(() => ({
    user: {},
    isLoading: false,
    error: null,
    isValidating: false,
    mutateUser: jest.fn(),
    refetchSSRUser: jest.fn()
  }))
})

describe('Home', () => {
  it('renders a headline', () => {
    customRender(<Home />, {})

    const headline = screen.getByText(
      'Let’s change the payment landscape together'
    )

    expect(headline).toBeInTheDocument()
  })
})
