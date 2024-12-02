import "dotenv/config";
import { index, model, pc } from "../lib/pinecone";

const main = async () => {
  const query = ["Tell me about the tech company known as Apple."];

  const queryEmbedding = await pc.inference.embed(model, query, {
    inputType: "query",
  });

  const queryResponse = await index.namespace("example-namespace").query({
    topK: 3,
    vector: queryEmbedding[0].values as number[],
    includeValues: false,
    includeMetadata: true,
  });

  console.log(queryResponse);
};

main().catch(console.error);
