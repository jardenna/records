import React from 'react';
import DetailsLink from '@components/records/Shared/DetailsLink';

export const theadText = [

   {
      key: 'myName',
      text: 'Company',
      sort: true
   },
   {
      key: 'age',
      text: 'Years',
      sort: true
   },
   {
      key: 'color',
      text: 'Color',
      sort: true
   },

   {
      key: 'num',
      text: 'Antal plader',
      sort: false
   }
];



export const cars = [
   { myName: 'Porsche', age: 2, color: 'Blue', button: <DetailsLink id={'5eae9ab7c425bf2c68efb725'} /> },
   { myName: 'BMW', age: 1, color: 'Grey' },
   { myName: 'Renault', age: 2, color: 'Yellow' },
   { myName: 'Volkswagen', age: 7, color: 'Matte Red' },
   { myName: 'Jaguar', age: 6, color: 'Electric Blue' },
   { myName: 'Mistubishi', age: 4, color: 'Black' },
   { myName: 'Toyota', age: 9, color: 'Copper' },
   { myName: 'Honda', age: 12, color: 'Biege' }
];