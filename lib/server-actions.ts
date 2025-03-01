import { gql } from "@apollo/client";
import client from "@/lib/apollo-client";

export async function getProducts() {
  const { data } = await client.query({
    query: gql`
      query GetProducts {
        products(first: 50) {
          edges {
            node {
              id
              title
              description
              tags
              metafields(
                identifiers: [{ namespace: "custom", key: "preorder" }]
              ) {
                key
                value
              }
              variants(first: 5) {
                edges {
                  node {
                    id
                    title
                    priceV2 {
                      amount
                      currencyCode
                    }
                    availableForSale
                    quantityAvailable
                  }
                }
              }
              images(first: 1) {
                edges {
                  node {
                    src
                    altText
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return data.products.edges;
}
