import React from 'react';
import { Item, ItemsGrid } from '../styles/Grid';

export default function LoadingGrid({ count }) {
  return (
    <ItemsGrid>
      {Array.from({ length: count }, (_, i) => (
        <Item>
          <p>
            <span className="mark">Loading...</span>
          </p>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+BCQAHBQICJmhD1AAAAABJRU5ErkJggg=="
            className="loading"
            alt="Loading"
            width="500"
            height="400"
          />
        </Item>
      ))}
    </ItemsGrid>
  );
}
