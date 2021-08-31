import { ChangeEvent, SyntheticEvent, useState } from "react"
import { Response } from "components/Response"
import { makeUrl } from "utils/makeUrl"

export const App = () => {
  const [expression, setExpression] = useState("")
  const [url, setUrl] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setExpression(e.target.value)
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    if (expression === "") return
    setUrl(makeUrl(expression))
  }

  return (
    <>
      <section>
        <header>
          <h1>Calculate a String</h1>
          <p>
            Write a mathematical expression with +, - or * and get the answer
          </p>
        </header>
        <form onSubmit={handleSubmit}>
          <label htmlFor="math">
            Value to calculate{" "}
            <input
              type="text"
              value={expression}
              id="math"
              onChange={handleChange}
            />
          </label>{" "}
          <input type="submit" value="Calculate" />
        </form>

        <footer>
          <p>Answer: {url !== "" && <Response url={url} />}</p>
        </footer>
      </section>
    </>
  )
}
