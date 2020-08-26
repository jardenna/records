import React from 'react';

function TableBody({ as: As, asChild: AsChild, data, iterator, ...props }) {

   return (
      <props.container>
         {data && data.map((row, i) => {

            return (
               <As className="table-row" key={i}>
                  {
                     row.map((_, i) => {
                        const data = row.find(r => r.key === iterator[i]);

                        return (
                           data && data.text !== '' &&
                           <AsChild key={i}>
                              {data.text}
                           </AsChild>

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

export default TableBody;
