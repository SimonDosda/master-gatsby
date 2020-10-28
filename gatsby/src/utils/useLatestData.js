import { useEffect, useState } from 'react';

const gql = String.raw;

const deets = gql`
    _id
    name
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
`;

function useLatestData() {
  const [hotSlices, setHotSlices] = useState();
  const [sliceMasters, setSliceMasters] = useState();
  useEffect(function () {
    // when the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
              ${deets}
              }
              hotSlices {
                ${deets}
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setHotSlices(data.StoreSettings.hotSlices);
        setSliceMasters(data.StoreSettings.slicemaster);
      });
  }, []);
  return { hotSlices, sliceMasters };
}

export default useLatestData;
