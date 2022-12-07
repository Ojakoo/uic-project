import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const entryRouter = router({
  add: publicProcedure
    .input(z.object({ 
      amount: z.number(),
      location: z.string(),
      growth: z.number(),
    }))
    .query(({ ctx, input }) => {
      return ctx.prisma.entry.create({data: input})
    }),
  getAll: publicProcedure
    .query(({ ctx }) => {
      return ctx.prisma.entry.findMany();
    }),
});
