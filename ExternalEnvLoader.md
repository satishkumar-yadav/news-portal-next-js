The T3 Env for Next.js is a utility designed to simplify and validate environment variables in your Next.js projects. It ensures that your environment variables are properly defined and validated at build time, reducing runtime errors and improving developer experience.

-- https://env.t3.gg/docs/nextjs
-- https://nextjs.org/docs/pages/guides/environment-variables

Key Features

- Validation: Ensures all required environment variables are present and correctly formatted.
- Type Safety: Provides TypeScript support for environment variables, making them easier to use and reducing errors.
- Integration: Works seamlessly with Next.js projects.

## Next.js

The Next.js package comes preconfigured for Next.js and also enforces some extra rules by default to make sure you have out-of-the-box compatibility in all different Next.js runtimes.

Getting Started

1. Install the package:

`
npm install @t3-oss/env-nextjs
npm i @t3-oss/env-nextjs

pnpm add @t3-oss/env-nextjs
pnpm add @t3-oss/env-nextjs zod ////////////

bun add @t3-oss/env-nextjs

`

# 2. Create Schema

// src/env.ts

`
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
server: {
DATABASE_URL: z.url(),
OPEN_AI_API_KEY: z.string().min(1),
},
client: {
NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().min(1),
},
// If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
runtimeEnv: {
DATABASE_URL: process.env.DATABASE_URL,
OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
},
// For Next.js >= 13.4.4, you only need to destructure client variables:
// experimental\_\_runtimeEnv: {
// NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
// }
});

`

While defining both the client and server schemas in a single file provides the best developer experience, it also means that your validation schemas for the server variables will be shipped to the client. If you consider the names of your variables sensitive, you should split your schemas into two files.

// src/env/server.ts
`
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
server: {
DATABASE_URL: z.url(),
OPEN_AI_API_KEY: z.string().min(1),
},
// If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
// runtimeEnv: {
// DATABASE_URL: process.env.DATABASE_URL,
// OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
// },
// For Next.js >= 13.4.4, you can just reference process.env:
experimental\_\_runtimeEnv: process.env
});
`

// src/env/client.ts

`
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
client: {
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
},
runtimeEnv: {
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
},
});

`

## Validate Schema on build (recommended)

We recommend you importing your newly created file in your next.config.js. This will make sure your environment variables are validated at build time which will save you a lot of time and headaches down the road. You can use unjs/jiti to import TypeScript files in your next.config.js:

// next.config.js

`
import { fileURLToPath } from "node:url";
import createJiti from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti@^1 we can import .ts files :)
jiti("./app/env");

/** @type {import('next').NextConfig} \*/
export default {
/** ... \*/
};
`

We do not recommend using next.config.ts as it does not support loading ESM.

2. Define your environment schema:
   Create a file (e.g., env.mjs) and define your environment variables using a schema:

`
import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
server: {
DATABASE_URL: z.string().url(),
},
client: {
NEXT_PUBLIC_API_URL: z.string().url(),
},
runtimeEnv: {
DATABASE_URL: process.env.DATABASE_URL,
NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
},
});

`

## Use your schema

Then, import the env object in your application and use it, taking advantage of type-safety and auto-completion:

// some-api-endpoint.ts

`
import { env } from "~/env"; // On server

export const GET = async () => {
// do fancy ai stuff
const magic = await fetch("...", {
headers: { Authorization: env.OPEN_AI_API_KEY },
});
// ...
};
`

// some-component.tsx

`
import { env } from "~/env"; // On client - same import!

export const SomeComponent = () => {
return (
<SomeProvider publishableKey={env.PUBLIC_PUBLISHABLE_KEY}>
{/_ ... _/}
</SomeProvider>
);
};
`

3. Import the schema:
   Use the validated environment variables in your application:

`
import { env } from "./env.mjs";

console.log(env.NEXT_PUBLIC_API_URL); // Safely access variables

`

4. Integrate with next.config.js:
   Import your environment file in next.config.js to validate variables during the build:

`
const { env } = require("./env.mjs");

module.exports = {
env: {
NEXT_PUBLIC_API_URL: env.NEXT_PUBLIC_API_URL,
},
};

`

Why Use T3 Env?

- Error Prevention: Catch missing or misconfigured environment variables early.
- Developer Productivity: Spend less time debugging environment-related issues.
- TypeScript Support: Enjoy type-safe access to environment variables.

This tool is particularly useful for teams working on complex Next.js applications where environment variables play a critical role.

// src/env.ts
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
/\*

- Serverside Environment variables, not available on the client.
- Will throw if you access these variables on the client.
  _/
  server: {
  DATABASE_URL: z.string().url(),
  OPEN_AI_API_KEY: z.string().min(1),
  },
  /_
- Environment variables available on the client (and server).
-
- 💡 You'll get type errors if these are not prefixed with NEXT*PUBLIC*.
  _/
  client: {
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },
  /_
- Specify what values should be validated by your schemas above.
-
- If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
- For Next.js >= 13.4.4, you can use the experimental\_\_runtimeEnv option and
- only specify client-side variables.
  \*/
  runtimeEnv: {
  DATABASE_URL: process.env.DATABASE_URL,
  OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
  NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  },
  // experimental\_\_runtimeEnv: {
  // NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
  });
