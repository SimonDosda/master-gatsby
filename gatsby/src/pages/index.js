import React from 'react';
import ItemGrid from '../components/ItemGrid';
import LoadingGrid from '../components/LoadingGrid';
import { HomePageGrid, Item } from '../styles/Grid';
import useLatestData from '../utils/useLatestData';

function CurrentlySlicing({ slicemasters }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Slice Masters On</span>
      </h2>
      <p>Standing by, ready to slice you up</p>
      {!slicemasters && <LoadingGrid count={4} />}
      {slicemasters?.length && <ItemGrid items={slicemasters} />}
    </div>
  );
}

function HotSlices({ hotslices }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Hot Slices On</span>
      </h2>
      <p>Come on by, buy the slice!</p>
      {!hotslices && <LoadingGrid count={4} />}
      {hotslices?.length && <ItemGrid items={hotslices} />}
    </div>
  );
}

export default function HomePage() {
  const { hotSlices, sliceMasters } = useLatestData();
  return (
    <div className="center">
      <h1>The Best Pizza Downtown!</h1>
      <p>Open 11am to 11pm Every Single Day</p>
      <HomePageGrid>
        <CurrentlySlicing slicemasters={sliceMasters} />
        <HotSlices hotslices={hotSlices} />
      </HomePageGrid>
    </div>
  );
}
