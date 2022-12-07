import { router } from "../trpc";
import { exampleRouter } from "./example";
import { entryRouter } from "./entry";

export const appRouter = router({
  example: exampleRouter,
  entry: entryRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
