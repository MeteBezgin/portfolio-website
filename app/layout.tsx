import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="bg-[#f6f9fc] mx-52 my-10 ">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
