import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const SliceMastersGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const SliceMasterStyles = styled.div`
  a {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    height: 350px;
  }
  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  .description {
    background: var(--yellow);
    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;
    position: relative;
    z-index: 2;
    transform: rotate(1deg);
    text-align: center;
  }
`;

export default function SliceMastersPage({ data, pageContext }) {
  const sliceMasters = data.sliceMasters.nodes;
  return (
    <>
      <SEO title={`Slicemasters - Page ${pageContext.current}`} />
      <Pagination
        pageSize={process.env.GATSBY_PAGE_SIZE}
        totalCount={data.sliceMasters.totalCount}
        currentPage={pageContext.current || 1}
        skip={pageContext.skip}
        base="/slicemasters"
      />
      <SliceMastersGridStyles>
        {sliceMasters.map(({ id, name, slug, description, image }) => (
          <SliceMasterStyles key={id}>
            <Link to={`/slicemaster/${slug.current}`}>
              <h2>
                <span className="mark">{name}</span>
              </h2>
            </Link>
            <Img fluid={image.asset.fluid} />
            <p className="description">{description}</p>
          </SliceMasterStyles>
        ))}
      </SliceMastersGridStyles>
    </>
  );
}

export const query = graphql`
  query PersonQuery($skip: Int = 0, $pageSize: Int = 4) {
    sliceMasters: allSanityPerson(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        name
        description
        slug {
          current
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
