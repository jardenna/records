import React from 'react';

import ContainerCell from './ContainerCell';

function Container({ as: As, asChild: AsChild, data, iterator, className, ...props }) {

   return (
      <props.container>
         {data && data.map((row, i) => {

            return (
               <As className={className ? className : ''} key={i}>
                  {
                     row.map((_, i) => {
                        const data = row.find(r => r.key === iterator[i]);

                        return (
                           data && data.text !== '' &&
                           <ContainerCell as={AsChild} text={data.text} key={i} />

                        );
                     }

                     )
                  }
               </As>
            );
         })}
      </props.container>
   );
}

export default Container;
