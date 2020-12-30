import React from 'react';
import { graphql } from 'gatsby';
import PizzaList from '../components/PizzaList';

export default function PizzaPage({ data }) {
  const pizzas = data.pizzas.nodes;
  console.log(data.pizzas);
  return (
    <>
      <p>Pizza page</p>
      <p>There are {pizzas.length} pizzas</p>
      <PizzaList pizzas={pizzas} />
    </>
  );
}

// this is a page query
export const query = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        topping {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
