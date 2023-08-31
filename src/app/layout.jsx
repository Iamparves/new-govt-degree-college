import Header from "@/components/Header";
import "@/fonts/fonts.css";
import "./globals.css";

export const metadata = {
  title: "New Govt. Degree College",
  description: "Generated by create next app",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-kalpurush">
        <div className="container">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
