import endpoints from '@common/endpoints';



export const DELETE_TYPES = {
   DELETE_RECORD_SUCCESS: 'DELETE_RECORD_SUCCESS'
};



function recordDeleted(id) {
   return {
      type: DELETE_TYPES.DELETE_RECORD_SUCCESS,
      payload: id
   };
}

export const deleteRecord = id => {
   const url = endpoints.records;
   const path = url + 'delete/' + id;
   return dispatch => {
      fetch(path, {
         method: 'delete',
         headers: {
            'Content-Type': 'application/json'
         }
      })
         .then(res => res.ok ? res.json() : Promise.reject(res))
         .then(() =>
            dispatch(recordDeleted(id))
         );
   };
};
