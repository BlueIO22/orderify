/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UserImport } from './routes/user'
import { Route as LoginImport } from './routes/login'
import { Route as IndexImport } from './routes/index'
import { Route as ProductsIndexImport } from './routes/products/index'
import { Route as OrdersIndexImport } from './routes/orders/index'
import { Route as ProductsNewIndexImport } from './routes/products/new/index'
import { Route as ProductsProductIdIndexImport } from './routes/products/$productId/index'
import { Route as OrdersOrderIdIndexImport } from './routes/orders/$orderId/index'
import { Route as ProductsProductIdEditImport } from './routes/products/$productId/edit'
import { Route as OrdersOrderIdEditImport } from './routes/orders/$orderId/edit'

// Create/Update Routes

const UserRoute = UserImport.update({
  id: '/user',
  path: '/user',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsIndexRoute = ProductsIndexImport.update({
  id: '/products/',
  path: '/products/',
  getParentRoute: () => rootRoute,
} as any)

const OrdersIndexRoute = OrdersIndexImport.update({
  id: '/orders/',
  path: '/orders/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsNewIndexRoute = ProductsNewIndexImport.update({
  id: '/products/new/',
  path: '/products/new/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsProductIdIndexRoute = ProductsProductIdIndexImport.update({
  id: '/products/$productId/',
  path: '/products/$productId/',
  getParentRoute: () => rootRoute,
} as any)

const OrdersOrderIdIndexRoute = OrdersOrderIdIndexImport.update({
  id: '/orders/$orderId/',
  path: '/orders/$orderId/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsProductIdEditRoute = ProductsProductIdEditImport.update({
  id: '/products/$productId/edit',
  path: '/products/$productId/edit',
  getParentRoute: () => rootRoute,
} as any)

const OrdersOrderIdEditRoute = OrdersOrderIdEditImport.update({
  id: '/orders/$orderId/edit',
  path: '/orders/$orderId/edit',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/user': {
      id: '/user'
      path: '/user'
      fullPath: '/user'
      preLoaderRoute: typeof UserImport
      parentRoute: typeof rootRoute
    }
    '/orders/': {
      id: '/orders/'
      path: '/orders'
      fullPath: '/orders'
      preLoaderRoute: typeof OrdersIndexImport
      parentRoute: typeof rootRoute
    }
    '/products/': {
      id: '/products/'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof ProductsIndexImport
      parentRoute: typeof rootRoute
    }
    '/orders/$orderId/edit': {
      id: '/orders/$orderId/edit'
      path: '/orders/$orderId/edit'
      fullPath: '/orders/$orderId/edit'
      preLoaderRoute: typeof OrdersOrderIdEditImport
      parentRoute: typeof rootRoute
    }
    '/products/$productId/edit': {
      id: '/products/$productId/edit'
      path: '/products/$productId/edit'
      fullPath: '/products/$productId/edit'
      preLoaderRoute: typeof ProductsProductIdEditImport
      parentRoute: typeof rootRoute
    }
    '/orders/$orderId/': {
      id: '/orders/$orderId/'
      path: '/orders/$orderId'
      fullPath: '/orders/$orderId'
      preLoaderRoute: typeof OrdersOrderIdIndexImport
      parentRoute: typeof rootRoute
    }
    '/products/$productId/': {
      id: '/products/$productId/'
      path: '/products/$productId'
      fullPath: '/products/$productId'
      preLoaderRoute: typeof ProductsProductIdIndexImport
      parentRoute: typeof rootRoute
    }
    '/products/new/': {
      id: '/products/new/'
      path: '/products/new'
      fullPath: '/products/new'
      preLoaderRoute: typeof ProductsNewIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/user': typeof UserRoute
  '/orders': typeof OrdersIndexRoute
  '/products': typeof ProductsIndexRoute
  '/orders/$orderId/edit': typeof OrdersOrderIdEditRoute
  '/products/$productId/edit': typeof ProductsProductIdEditRoute
  '/orders/$orderId': typeof OrdersOrderIdIndexRoute
  '/products/$productId': typeof ProductsProductIdIndexRoute
  '/products/new': typeof ProductsNewIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/user': typeof UserRoute
  '/orders': typeof OrdersIndexRoute
  '/products': typeof ProductsIndexRoute
  '/orders/$orderId/edit': typeof OrdersOrderIdEditRoute
  '/products/$productId/edit': typeof ProductsProductIdEditRoute
  '/orders/$orderId': typeof OrdersOrderIdIndexRoute
  '/products/$productId': typeof ProductsProductIdIndexRoute
  '/products/new': typeof ProductsNewIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/user': typeof UserRoute
  '/orders/': typeof OrdersIndexRoute
  '/products/': typeof ProductsIndexRoute
  '/orders/$orderId/edit': typeof OrdersOrderIdEditRoute
  '/products/$productId/edit': typeof ProductsProductIdEditRoute
  '/orders/$orderId/': typeof OrdersOrderIdIndexRoute
  '/products/$productId/': typeof ProductsProductIdIndexRoute
  '/products/new/': typeof ProductsNewIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/user'
    | '/orders'
    | '/products'
    | '/orders/$orderId/edit'
    | '/products/$productId/edit'
    | '/orders/$orderId'
    | '/products/$productId'
    | '/products/new'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/user'
    | '/orders'
    | '/products'
    | '/orders/$orderId/edit'
    | '/products/$productId/edit'
    | '/orders/$orderId'
    | '/products/$productId'
    | '/products/new'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/user'
    | '/orders/'
    | '/products/'
    | '/orders/$orderId/edit'
    | '/products/$productId/edit'
    | '/orders/$orderId/'
    | '/products/$productId/'
    | '/products/new/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LoginRoute: typeof LoginRoute
  UserRoute: typeof UserRoute
  OrdersIndexRoute: typeof OrdersIndexRoute
  ProductsIndexRoute: typeof ProductsIndexRoute
  OrdersOrderIdEditRoute: typeof OrdersOrderIdEditRoute
  ProductsProductIdEditRoute: typeof ProductsProductIdEditRoute
  OrdersOrderIdIndexRoute: typeof OrdersOrderIdIndexRoute
  ProductsProductIdIndexRoute: typeof ProductsProductIdIndexRoute
  ProductsNewIndexRoute: typeof ProductsNewIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LoginRoute: LoginRoute,
  UserRoute: UserRoute,
  OrdersIndexRoute: OrdersIndexRoute,
  ProductsIndexRoute: ProductsIndexRoute,
  OrdersOrderIdEditRoute: OrdersOrderIdEditRoute,
  ProductsProductIdEditRoute: ProductsProductIdEditRoute,
  OrdersOrderIdIndexRoute: OrdersOrderIdIndexRoute,
  ProductsProductIdIndexRoute: ProductsProductIdIndexRoute,
  ProductsNewIndexRoute: ProductsNewIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/login",
        "/user",
        "/orders/",
        "/products/",
        "/orders/$orderId/edit",
        "/products/$productId/edit",
        "/orders/$orderId/",
        "/products/$productId/",
        "/products/new/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/user": {
      "filePath": "user.tsx"
    },
    "/orders/": {
      "filePath": "orders/index.tsx"
    },
    "/products/": {
      "filePath": "products/index.tsx"
    },
    "/orders/$orderId/edit": {
      "filePath": "orders/$orderId/edit.tsx"
    },
    "/products/$productId/edit": {
      "filePath": "products/$productId/edit.tsx"
    },
    "/orders/$orderId/": {
      "filePath": "orders/$orderId/index.tsx"
    },
    "/products/$productId/": {
      "filePath": "products/$productId/index.tsx"
    },
    "/products/new/": {
      "filePath": "products/new/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
