import endpoints from '@common/endpoints';

export const UPDATE_TYPES = {
   UPDATE_RECORD_START: 'UPDATE_RECORD_START',
   UPDATE_RECORD_SUCCESS: 'UPDATE_RECORD_SUCCESS',
   UPDATE_RECORD_FAILURE: 'UPDATE_RECORD_FAILURE',
   UPDATE_IMAGE: 'UPDATE_IMAGE'
};


const updateRecordStart = () => ({
   type: UPDATE_TYPES.UPDATE_RECORD_START
});

const updateRecordFailure = (error) => ({
   type: UPDATE_TYPES.UPDATE_RECORD_FAILURE,
   payload: error
});

const recordUpdated = (id, fileName, record) => {

   return ({
      type: UPDATE_TYPES.UPDATE_RECORD_SUCCESS,
      image: fileName,
      id,
      payload: record
   });
};


export const updateRecordSuccess = (id, record, imgUpdated, fileName, file) => {

   const url = endpoints.records;
   const path = url + id;

   if (imgUpdated) {
      return () => {
         const fd = new FormData();

         fd.append(fileName, file);
         for (let key in record) {
            fd.append(key, record[key]);
         }
         fetch(path, {
            method: 'POST',
            body: fd
         })
            .then(res => res.ok ? res.json() : Promise.reject(res));



      };
   }

   return dispatch => {
      dispatch(updateRecordStart());
      fetch(path, {
         method: 'PUT',
         body: JSON.stringify(record),
         headers: {
            'Content-Type': 'application/json'
         }
      })
         .then(res => res.ok ? res.json() : Promise.reject(res))
         .then(() => dispatch(recordUpdated(id, record)))
         .catch(error => dispatch(updateRecordFailure(error)));
   };




};