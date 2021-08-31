import { SERVER_URL } from "../constants"

export const makeUrl = (calculations: string) => {
  const cleanCalculations = calculations.replace(/\s/g, "")
  const calc = encodeURIComponent(cleanCalculations)

  return `${SERVER_URL}/calc/${calc}`
}
