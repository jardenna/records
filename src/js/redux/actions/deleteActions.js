import endpoints from '@common/endpoints';

export const DELETE_TYPES = {

   DELETE_RECORD_SUCCESS: 'DELETE_RECORD_SUCCESS'
};




function handleResponse(response) {
   if (response.ok) {
      return response.json();
   } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
   }
}

export function recordDeleted(id) {

   return {
      type: DELETE_TYPES.DELETE_RECORD_SUCCESS,
      payload: id
   };
}

export function deleteRecord(id) {
   const url = endpoints.records;
   const path = url + 'delete/' + id;
   return dispatch => {
      return fetch(path, {
         method: 'delete',
         headers: {
            'Content-Type': 'application/json'
         }
      }).then(handleResponse)
         .then(() => dispatch(recordDeleted(id)));
   };
}
