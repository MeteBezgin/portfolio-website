import { NextSeo } from "next-seo";
import AnalyticsWrapper from "../components/AnalyticsWrapper";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
        <NextSeo
          useAppDir={true}
          title="Mete Bezgin"
          titleTemplate="%s | Fullstack Developer"
          description="Hi, I'm Mete. A fullstack developer based in Istanbul with a passion of building simple, beatiful user experiences. Contact me and let's meet!"
        />
      </head>
      <body className="bg-[#f6f9fc] mx-52 my-10 ">
        <NavBar />
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
