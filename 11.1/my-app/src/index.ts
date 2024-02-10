
export interface Env {

}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log("hiii",request.body)
		return Response.json({
			message: "Hello nigga"
		});
	},
};
