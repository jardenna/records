export function normalizeData(data) {
   return data.map(elem => {
      const keys = Object.keys(elem);
      return keys.map(key => ({ key, text: elem[key] }));
   });
}