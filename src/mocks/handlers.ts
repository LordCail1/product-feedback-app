import { rest } from "msw"

export const handlers = [
	rest.post("/api/productRequest", (req, res, ctx) => {
		return res(ctx.json({ message: "success" }), ctx.status(200))
	}),
	rest.put("/api/productRequest", (req, res, ctx) => {
		return res(ctx.json({ message: "success" }), ctx.status(200))
	}),
	rest.get("/home", (req, res, ctx) => {
		return res(ctx.json({ message: "success" }))
	}),
]
