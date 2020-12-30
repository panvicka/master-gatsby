import React from 'react';
import { Link } from 'gatsby';

function SinglePizza({ pizza }) {
  return (
    <div>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
        <p>{pizza.topping.map((top) => top.name).join(', ')}</p>
      </Link>
    </div>
  );
}

export default function PizzaList({ pizzas }) {
  return (
    <div>
      <p>There are {pizzas.length} pizzas</p>
      {pizzas.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}
