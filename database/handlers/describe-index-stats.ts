import "dotenv/config";
import { index, pc } from "../lib/pinecone";

const main = async () => {
  const stats = await index.describeIndexStats();
  console.log(stats);
};

main().catch(console.error);
