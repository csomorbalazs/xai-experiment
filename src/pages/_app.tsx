import { css, Global } from "@emotion/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            font-family: "Inter", sans-serif;
            color: #201e1e;
            margin: 0;
            padding: 0;
            font-size: 17px;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}
