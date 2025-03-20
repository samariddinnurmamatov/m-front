import { LangsType } from "@/types";
import { i18n } from "next-i18next";
import Document, { Html, Head, Main, NextScript } from "next/document";

const lang = {
  kr: "uz-Cyrl-UZ",
  uz: "uz-Latn-UZ",
  ru: "ru-UZ",
};

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang={lang?.[i18n?.language as LangsType]}>
        <Head>
         
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
