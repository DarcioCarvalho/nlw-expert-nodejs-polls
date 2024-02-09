import { FastifyInstance } from "fastify";

export async function HelloNLW(app: FastifyInstance) {
  app.get("/hello", (request, reply) => {
    return reply.send({
      message: "Olá NLW 14"
    });
  });

}