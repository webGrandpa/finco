// src/app/layout.js

import Header from "../app/components/layout/Header";
import Footer from "../app/components/layout/Footer";
import ChatBot from "../app/components/ChatBot";
import ScrollToTop from "../app/components/layout/ScrollToTop";
import "./globals.css";

export const metadata = {
  title: "Finco",
  description: "ფინანსური და იურიდიული მომსახურება",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ChatBot />
        </div>
      </body>
    </html>
  );
}