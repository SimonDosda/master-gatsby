import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const SlicemasterStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export default function Slicemaster({ data: { slicemaster } }) {
  return (
    <>
      <SEO title={slicemaster.name} image={slicemaster.image.asset.fluid.src} />
      <SlicemasterStyles>
        <Img fluid={slicemaster.image.asset.fluid} />
        <div>
          <h2>
            <span className="mark">{slicemaster.name}</span>
          </h2>
          <p>{slicemaster.description}</p>
        </div>
      </SlicemasterStyles>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    slicemaster: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      slug {
        current
      }
      description
      image {
        asset {
          fluid(maxWidth: 800, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
