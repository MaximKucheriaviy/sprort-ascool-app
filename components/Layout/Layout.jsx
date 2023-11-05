import { Header } from "../Header/Header";
import Head from "next/head";

export const Layout = ({ children }) => {
  <Head>
    <title>Create Next App</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>;
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
