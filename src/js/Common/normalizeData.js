export function normalizeData(data) {

   return data && data.map(elem => {
      const keys = Object.keys(elem);
      return keys.map(key => ({ key, text: elem[key] }));
   });
}

//Should be called convertToObjs

export function addId(data) {
   return data && data.map((d, id) => ({ ...d, id }));
}

function transform(arr) {
   return arr.reduce((result, item) => {
      if (typeof item !== 'undefined') {
         if (Array.isArray(item)) item = transform(item);
         // We can transform item here.
         result.push(item);
      }
      return result;
   }, []);
}



//data = An array, iterator = array of keys to display
export function dataIterator(data, iterator) {
   const normalizedData = normalizeData(addId(data));

   const dataArr = normalizedData && normalizedData.map((row) => {
      return (
         row.map((_, i) => {
            const data = row.find(r => r.key === iterator[i]);
            return data;
         }
         )
      );
   });

   const result = dataArr && transform(dataArr);
   return result;
}

