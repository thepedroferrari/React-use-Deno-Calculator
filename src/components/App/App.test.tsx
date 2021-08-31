import { render, screen } from "@testing-library/react"
import { App } from "./App"

test("Renders the date text", () => {
  render(<App />)
  const linkElement = screen.getByText(/Calculate a String/i)
  expect(linkElement).toBeInTheDocument()
})
