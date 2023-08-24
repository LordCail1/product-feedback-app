import {render, screen} from "@testing-library/react"
import RootPage from "./page"



describe("RootPage", () => {
    test("renders correctly", () => {
        render(<RootPage/>)
    })
})