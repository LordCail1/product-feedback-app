import { rest } from "msw"

export const handlers = [
	rest.post("/api/productRequest", (req, res, ctx) => {
        return res(
            ctx.json({message: "success"}),
            ctx.status(200)
        )
    }),
]
