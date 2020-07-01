// create an array of child ids
function getChildren(obj) {
   return (!Array.isArray(obj))
      ? []
      : obj.reduce((arr, curr) => arr.concat(curr.id, ...getChildren(curr.children)), []);
}

// find a particular id
//Parameters: the name og the array and the id that should be found
export function search(arr, key) {
   if (Array.isArray(arr)) {
      for (let obj of arr) {
         return (obj.id === key)
            ? { id: obj.id, children: getChildren(obj.children) }   // call getChildren once you've found the object
            : search(obj.children, key);
      }
   }
}

