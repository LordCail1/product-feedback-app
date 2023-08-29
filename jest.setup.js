import "@testing-library/jest-dom/extend-expect"
import "whatwg-fetch"
import { server } from "./src/mocks/server"
import { jestPreviewConfigure } from "jest-preview"

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
