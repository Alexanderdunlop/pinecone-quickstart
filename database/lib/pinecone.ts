import { Pinecone } from "@pinecone-database/pinecone";

if (!process.env.PINECONE_API_KEY)
  throw new Error("PINECONE_API_KEY is required");

export const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

export const indexName = "example-index";

export const model = "multilingual-e5-large";
