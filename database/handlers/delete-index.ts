import "dotenv/config";
import { indexName, pc } from "../lib/pinecone";

const main = async () => {
  await pc.deleteIndex(indexName);
};

main().catch(console.error);
