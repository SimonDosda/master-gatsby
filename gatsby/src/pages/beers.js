import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BeerGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const BeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`;

export default function BeersPage({ data }) {
  const beers = data.beers.nodes;
  const rating = (beer) => Math.round(beer.rating.average);
  return (
    <>
      <SEO title={`Beers! We have ${beers.length} in stock`} />
      <h2 className="center">
        We have {beers.length} beers available. Dine in only!
      </h2>
      <BeerGridStyles>
        {beers.map((beer) => (
          <BeerStyles key={beer.id}>
            <img src={beer.image} alt={beer.name} />
            <h3>{beer.name}</h3>
            {beer.price}
            <p title={`${rating(beer)} out of 5 stars`}>
              {`⭐`.repeat(rating(beer))}
              <span style={{ filter: `grayscale(100%)` }}>
                {`⭐`.repeat(5 - rating(beer))}
              </span>
              <span>({beer.rating.reviews})</span>
            </p>
          </BeerStyles>
        ))}
      </BeerGridStyles>
    </>
  );
}

export const query = graphql`
  query BeerQuery {
    beers: allBeer {
      nodes {
        id
        name
        price
        image
        rating {
          reviews
          average
        }
      }
    }
  }
`;
