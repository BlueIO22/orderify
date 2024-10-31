/// <reference types="vinxi/types/client" />
import { StartClient } from "@tanstack/start";
import { hydrateRoot } from "react-dom/client";
import { createRouter } from "./router";
const router = createRouter();

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}
const session = localStorage.getItem("session");
if (session) {
  console.log(session);
}

hydrateRoot(root, <StartClient router={router} />);
