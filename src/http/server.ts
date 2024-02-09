import fastify from "fastify";
import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";

import { CreatePoll } from "../routes/create-poll";
import { HelloNLW } from "../routes/hello-nlw";
import { GetPoll } from "../routes/get-poll";
import { VoteOnPoll } from "../routes/vote-on-poll";
import { PollResults } from "../ws/poll-results";

const app = fastify();

app.register(cookie, {
  secret: "pools-app-nlw-dnc", // for cookies signature
  hook: 'onRequest'
});

app.register(websocket);

app.register(HelloNLW);
app.register(CreatePoll);
app.register(GetPoll);
app.register(VoteOnPoll);
app.register(PollResults);

app.listen({ port: 3333 })
  .then(() => console.log("HTTP Server is running..."));