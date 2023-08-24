import {
  fireEvent,
  getByText,
  getByTitle,
  render,
  screen,
} from "@testing-library/react"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeProvider } from "next-themes"

it("Switches The Theme", async () => {
  const { getByTestId, getAllByTestId } = render(<ModeToggle />)
  const toggle = getByTestId("trigger")

  // fireEvent.click(toggle)

  // const darkToggle = getByTestId("dark").fireEvent.click(darkToggle)
  // expect(localStorage.getItem("theme")).toEqual("dark")

  // const lightToggle = screen.getByTestId("light")
  // fireEvent.click(lightToggle)
  // expect(localStorage.getItem("theme")).toBe("light")

  // const systemToggle = screen.getByTestId("system")
  // fireEvent.click(systemToggle)
  // expect(localStorage.getItem("theme")).toBe("system")
})
