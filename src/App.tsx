import { useLayoutEffect } from "react";

import { Home } from "@/pages/Home";

export default function App() {
  useLayoutEffect(() => {
    document.title = "Aditya";
  }, []);

  return <Home />;
}
