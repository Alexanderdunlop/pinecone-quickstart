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
