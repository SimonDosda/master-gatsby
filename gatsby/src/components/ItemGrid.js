import React from 'react';
import { Item, ItemsGrid } from '../styles/Grid';

export default function ItemGrid({ items }) {
  return (
    <ItemsGrid>
      {items.map((item) => (
        <Item>
          <p>
            <span className="mark">{item.name}</span>
          </p>
          <img
            src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
            alt={item.name}
            width="500"
            height="400"
            style={{
              background: `url(${item.image.asset.metadata.lqip})`,
              backgroundSize: 'cover',
            }}
          />
        </Item>
      ))}
    </ItemsGrid>
  );
}
