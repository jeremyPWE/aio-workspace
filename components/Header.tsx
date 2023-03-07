import React from "react";
import Head from "next/head";

type Props = {};

function Header({}: Props) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Description of your website or project"
      />
      <meta
        name="keywords"
        content="List of keywords related to your website or project"
      />
      <title>Title of your website or project</title>
    </Head>
  );
}

export default Header;
