export function normalizeData(data) {

   return data && data.map(elem => {
      const keys = Object.keys(elem);
      return keys.map(key => ({ key, text: elem[key] }));
   });
}

export function addId(data) {
   return data && data.map((d, id) => ({ ...d, id }));
}



