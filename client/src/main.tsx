import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Helmet>
      <title>SporeTrust - Blockchain Verified Mushroom Genetics</title>
      <meta name="description" content="SporeTrust brings trust and transparency to mushroom genetic exchanges through blockchain technology and DNA verification. Verify and track the genetic lineage of your gourmet mushrooms." />
      <meta property="og:title" content="SporeTrust - Blockchain Verified Mushroom Genetics" />
      <meta property="og:description" content="Secure, verifiable spore exchanges between growers with DNA verification and blockchain traceability." />
      <meta property="og:type" content="website" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;600&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
    </Helmet>
    <App />
  </HelmetProvider>
);
