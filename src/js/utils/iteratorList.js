// Function for finding the object with longest length in an array
function iteratorObj(data) {
   const keyLength = data.map(a => Object.keys(a).length);
   const maxLength = Math.max(...keyLength);

   return data.filter(a => Object.keys(a).length === maxLength);
}

export function objKeys(data) {
   return Object.keys(iteratorObj(data)[0]);
}