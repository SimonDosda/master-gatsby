import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  a {
    margin: 1rem 1rem 0 0;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background-color: var(--grey);
    border-radius: 2px;
    .count {
      background-color: white;
      padding: 2px 5px;
    }
    &[aria-current='page'] {
      background-color: var(--yellow);
    }
  }
`;

function getToppings(pizzas) {
  const pizzaToppingByName = pizzas
    .map(({ toppings }) => toppings)
    .flat()
    .reduce((toppingByName, topping) => {
      const existingTopping = toppingByName[topping.name];
      if (existingTopping) {
        existingTopping.count += 1;
      } else {
        toppingByName[topping.name] = {
          ...topping,
          count: 1,
        };
      }
      return toppingByName;
    }, {});
  return Object.values(pizzaToppingByName).sort(
    (el1, el2) => el2.count - el1.count
  );
}

export default function ToppingsFilter() {
  const data = useStaticQuery(graphql`
    query {
      pizzas: allSanityPizza {
        nodes {
          id
          name
          toppings {
            id
            name
          }
        }
      }
    }
  `);
  const pizzas = data.pizzas.nodes;
  const toppings = getToppings(pizzas);
  return (
    <ToppingsStyles>
      <Link to="/pizzas">
        <span className="name">All</span>
        <span className="count">{pizzas.length}</span>
      </Link>
      {toppings.map((topping) => (
        <Link to={`/topping/${topping.name}`} key={topping.id}>
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingsStyles>
  );
}
