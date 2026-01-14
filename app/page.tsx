"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios
      .get("/api/quote")
      .then((res) => setQuote(res.data.quote))
      .catch(() => setQuote("..."));
  }, []);

  return (
    <>
      <h1>X</h1>
      <p style={{ marginTop: "16px", color: "#a1a1aa" }}>
        {quote || "Loading..."}
      </p>
    </>
  );
}
