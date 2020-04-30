import endpoints from '@common/endpoints';

export const CREATE_TYPES = {
   CREATE_RECORD_START: 'CREATE_RECORD_START',
   CREATE_RECORD_SUCCESS: 'CREATE_RECORD_SUCCESS',
   CREATE_RECORD_FAILURE: 'CREATE_RECORD_FAILURE'
};

const createRecordStart = () => {
   return {
      type: CREATE_TYPES.CREATE_RECORD_START
   };
};

const createRecordFailure = (error) => {
   return {
      type: CREATE_TYPES.CREATE_RECORD_FAILURE,
      payload: error
   };
};
export const createRecord = (record, fileName, file) => {
   const fd = new FormData();

   for (let key in record) {
      fd.append(key, record[key]);
   }
   fd.append(fileName, file);


   return dispatch => {
      dispatch(createRecordStart());
      fetch(endpoints.records, {
         method: 'POST',
         body: fd

      })
         .then(res => res.ok ? res.json() : Promise.reject(res))
         .then(record =>
            dispatch({
               type: CREATE_TYPES.CREATE_RECORD_SUCCESS,
               payload: record,
               file,
               fileName
            })
         )
         .catch(error => dispatch(createRecordFailure(error)));
   };
};
