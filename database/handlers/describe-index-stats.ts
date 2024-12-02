import "dotenv/config";
import { indexName, pc } from "../lib/pinecone";

const main = async () => {
  const index = pc.index(indexName);
  const stats = await index.describeIndexStats();
  console.log(stats);
};

main().catch(console.error);
