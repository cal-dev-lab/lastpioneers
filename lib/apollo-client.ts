import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from "@apollo/client";

const shopifyStorefrontURL: string = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE}.myshopify.com/api/2024-01/graphql.json`;

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: new HttpLink({
    uri: shopifyStorefrontURL,
    headers: {
      "X-Shopify-Storefront-Access-Token": process.env
        .NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN as string,
      "Content-Type": "application/json",
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
