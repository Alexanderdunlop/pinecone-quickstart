import "dotenv/config";
import { PineconeRecord, RecordMetadata } from "@pinecone-database/pinecone";
import { data } from "../lib/data";
import { pc, indexName, model } from "../lib/pinecone";

const main = async () => {
  const embeddings = await pc.inference.embed(
    model,
    data.map((d) => d.text),
    { inputType: "passage", truncate: "END" }
  );

  const index = pc.index(indexName);
  const records: PineconeRecord<RecordMetadata>[] = data.map((d, i) => ({
    id: d.id,
    values: embeddings[i].values as number[],
    metadata: { text: d.text },
  }));

  await index.namespace("example-namespace").upsert(records);
};

main().catch(console.error);
