import React from 'react';

import TableHeader from './TableHeader';
import { normalizeData, addId } from '@common/normalizeData';
import Container from '@commonReact/Children/Container';
import { cars, theadText } from '@data/cars';
import { objKeys } from '@utils/iteratorList';

import Popup from '@commonReact/Popup';

//Creating an iterator for mapping data
const iterator = [...objKeys(cars)];

function Table() {
   const tbodyData = normalizeData(addId(cars));

   const testObj = [
      { id: 1, item: 'Er du sikker på at du vil slette' },
      { id: 2, item: 'Arts' },
      { id: 3, item: 'Leisure' }
   ];

   const testObj1 = [
      { id: 11, item: 'Er du sikker på at du vil slette' },
      { id: 21, item: 'Arts' }
   ];
   return (
      <div>
         <div >
            {testObj1.map(genre =>
               <Popup key={genre.id}

                  id={genre.id}
                  text={genre.item}

                  callback={() => console.log(456)}
                  buttonType={'delete'}
                  deleteLinkTo={'/'}
                  triggerBtnClassName={'danger'}
                  triggerBtnText={'Slet'}
                  role={'tooltip'}
                  componentName={'tooltip'}
                  tooltipDirection={'right'}

               />
            )}

         </div>

         <div style={{ marginTop: 80 }}>
            {testObj.map(genre =>
               <Popup key={genre.id}

                  callback={() => console.log(56)}

                  id={genre.id}
                  text={genre.item}


                  buttonType={'delete'}
                  deleteLinkTo={'/'}
                  triggerBtnClassName={'danger'}
                  triggerBtnText={'Slet'}
                  role="dialog"
                  ariaType={'modal'}
                  componentName={'modal'}
                  showFooter
               />
            )}

         </div>
         <table className="container">
            <TableHeader
               headers={theadText}
            />

            <Container
               data={tbodyData}
               iterator={iterator}
               as={'tr'}
               asChild={'td'}
               container={'tbody'}
               className={'table-row'}
            />

         </table>

      </div>

   );
}

export default Table;
