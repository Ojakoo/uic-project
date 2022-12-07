import { type NextPage } from "next";
import Head from "next/head";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const entries = trpc.entry.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1>Hello</h1>
        <div>
          {entries.data?.map((entry) => {
            return (
              <>{entry.amount}</>
            )
          })}
        </div>
      </main>
    </>
  );
};

export default Home;