import { useEffect, useState } from "react"
import { validateAnswer } from "utils/validateAnswer"

interface Props {
  url: string
}
export const Response = ({ url }: Props) => {
  const [result, setResult] = useState("")
  const isValidAnswer = validateAnswer(result)

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal })
        const data = await response.json()

        if (!response.ok) {
          // eslint-disable-next-line no-console
          console.error(
            `failed to fetch data from url: ${
              response.url
            }, response: ${JSON.stringify(response)}`,
          )
          setResult("There was an error fetching from the server")
        }
        setResult(data.msg)
      } catch (error) {
        if (!controller.signal.aborted) {
          // eslint-disable-next-line no-console
          console.error(error, url)
        }
      }
    }
    fetchData()

    return () => {
      controller.abort()
    }
  }, [url])

  return (
    <span className={isValidAnswer ? "" : "error"}>
      {isValidAnswer ? "" : "Error: "}
      {result}
    </span>
  )
}
