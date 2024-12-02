# Pinecone Database Example

Copy and replace .env.example with .env and fill in the required fields.

1. Install dependencies

```bash
pnpm install
```

2. Copy and replace .env.example with .env

```bash
cp .env.example .env
```

3. Create an index

```bash
pnpm tsx /handlers/create-index.ts
```

4. Upsert vectors

```bash
pnpm tsx /handlers/upsert-vectors.ts
```

5. Check pinecone is eventually consistent

```bash
pnpm tsx /handlers/describe-index-stats.ts
```

It should look like:

```
{
  namespaces: { example-namespace: { recordCount: 6 } },
  dimension: 1024,
  indexFullness: 0.00008,
  totalRecordCount: 6
}
```

6. Search index

```bash
pnpm tsx /handlers/search-index.ts
```

7. Clean up & delete index

```bash
pnpm tsx /handlers/delete-index.ts
```
