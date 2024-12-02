import "dotenv/config";
import { indexName, pc } from "../lib/pinecone";

const main = async () => {
  await pc.createIndex({
    name: indexName,
    dimension: 1024,
    metric: "cosine",
    spec: {
      serverless: {
        cloud: "aws",
        region: "us-east-1",
      },
    },
  });
};

main().catch(console.error);
