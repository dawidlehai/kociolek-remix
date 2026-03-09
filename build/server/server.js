import { createRequestHandler } from "@netlify/remix-adapter";
import { b as build } from "./assets/server-build-C0MmQ6zO.js";
import "react/jsx-runtime";
import "@remix-run/react";
import "react-dom/server";
import "date-fns";
import "react";
import "@phosphor-icons/react/ssr";
const _virtual_netlifyServer = createRequestHandler({
  build,
  getLoadContext: async (_req, ctx) => ctx
});
export {
  _virtual_netlifyServer as default
};
