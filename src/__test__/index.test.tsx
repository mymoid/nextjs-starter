import { screen } from '@testing-library/react'
import { customRender } from '@/utils/test-utils'
import Home from '@/app/page'

jest.mock('@auth0/nextjs-auth0/client', () => ({
  useUser: jest.fn(() => ({
    user: {},
    isLoading: false
  }))
}))

describe('Home', () => {
  it('renders a headline', () => {
    customRender(<Home />, {})

    const headline = screen.getByText(
      'Let’s change the payment landscape together'
    )

    expect(headline).toBeInTheDocument()
  })
})
