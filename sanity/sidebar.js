import React from 'react';
import Sbuilder from '@sanity/desk-tool/structure-builder';
import { AiFillHome } from 'react-icons/ai';

// build a custom sidebar
export default function Sidebar() {
  return Sbuilder.list()
    .title(`Slick's Slices`)
    .items([
      // create a new sub item
      Sbuilder.listItem()
        .title('Home')
        .icon(() => <AiFillHome />)
        .child(
          Sbuilder.editor().schemaType('storeSettings').documentId('downtown')
        ),
      // add in the rest of our documment items
      ...Sbuilder.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
