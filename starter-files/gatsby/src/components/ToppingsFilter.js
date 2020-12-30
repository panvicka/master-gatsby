import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    padding: 5px;
    align-items: center;
    border-radius: 2px;
    grid-template-columns: auto 1fr;
    background: var(--grey);
    .count {
      background: white;
      padding: 2px 5px;
    }
    .active {
      background: var(--yellow);
    }
  }
`;

function countPizzasInToppings(pizzas) {
  // return pizas with counts
  console.log(pizzas);
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // check if this is an existing topping
      const existing = acc[topping.id];
      if (existing) {
        existing.count += 1;
      } else {
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }

      return acc;
    }, {});

  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
}

export default function ToppingsFilter() {
  // get list of toppings
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          id
          name
          vegetarian
        }
      }

      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);
  console.clear();
  console.log({ toppings, pizzas });

  const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);
  console.log(toppingsWithCounts);
  // get list of pizzas with toppings
  // count how many pizzas are in each topping
  // loop over the list of toppings and display the toppings and the count of pizzas in that topping
  return (
    <>
      <ToppingsStyles>
        {toppingsWithCounts.map((topping) => (
          <Link key={topping.id} to={`/topping/${topping.name}`}>
            <span className='name'> {topping.name}</span>
            <span className='count'> {topping.count}</span>
          </Link>
        ))}
      </ToppingsStyles>
    </>
  );
}
