import { HandlerContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(ctx: HandlerContext) {
    return new Response("Hello World");
  },
};