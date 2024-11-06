import fontawesomecss from "@fortawesome/fontawesome-svg-core/styles.css?url";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  createRootRoute,
  Link,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
import * as React from "react";
import globalCss from "../global.css?url";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      title: "TanStack Start Starter",
    },
  ],
  links: () => [
    { rel: "stylesheet", href: globalCss },
    { rel: "stylesheet", href: fontawesomecss },
  ],
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        <nav className="flex gap-10 px-20 p-10 w-full h-[60px]">
          <div className="w-[200px]">
            <Link className="italic text-4xl font-bold" href="/">
              Orderify <FontAwesomeIcon icon={faTruckFast} size="xs" />
            </Link>
          </div>
          <ul className="text-2xl flex gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/orders">Orders</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </nav>
        {children}
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  );
}
