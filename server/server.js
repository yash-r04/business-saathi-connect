import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import {
  BedrockRuntimeClient,
  ConverseCommand
} from "@aws-sdk/client-bedrock-runtime";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new BedrockRuntimeClient({
  region: process.env.AWS_REGION,

  credentials: {
    accessKeyId:
      process.env.AWS_ACCESS_KEY_ID,

    secretAccessKey:
      process.env.AWS_SECRET_ACCESS_KEY
  }
});

app.post("/chat", async (req, res) => {

  try {

    const { messages } = req.body;

    console.log("Incoming:", messages);

   const formattedMessages = messages

  // remove empty messages
  .filter((msg) => msg.text)

  // make sure first message is user
  .filter((msg, index) => {

    if (
      index === 0 &&
      msg.sender !== "user"
    ) {
      return false;
    }

    return true;
  })

  .map((msg) => ({

    role:
      msg.sender === "user"
        ? "user"
        : "assistant",

    content: [
      {
        text: msg.text
      }
    ]
  }));

    const command =
      new ConverseCommand({

        modelId:
          "amazon.nova-lite-v1:0",

        messages: formattedMessages,

        inferenceConfig: {
          temperature: 0.7,
          maxTokens: 300
        }
      });

    const response =
      await client.send(command);

    console.log(
      JSON.stringify(response, null, 2)
    );

    const reply =
      response.output.message.content[0].text;

    res.json({ reply });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: err.message
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});