import endpoints from '@common/endpoints';
import api from '@common/api';
import imgApi from '@common/imgApi';

export const UPDATE_TYPES = {
   UPDATE_RECORD_START: 'UPDATE_RECORD_START',
   UPDATE_RECORD_SUCCESS: 'UPDATE_RECORD_SUCCESS',
   UPDATE_RECORD_FAILURE: 'UPDATE_RECORD_FAILURE',
   UPDATE_IMAGE: 'UPDATE_IMAGE'
};


const updateRecordStart = () => ({
   type: UPDATE_TYPES.UPDATE_RECORD_START
});

const updateRecordFailure = error => ({
   type: UPDATE_TYPES.UPDATE_RECORD_FAILURE,
   payload: error
});

const recordUpdated = (id, record, fileName) => {

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

         imgApi('post', path, fd);

      };
   }

   return dispatch => {
      dispatch(updateRecordStart());


      api('put', path, record)

         .then(() => dispatch(recordUpdated(id, record)))
         .catch(error => dispatch(updateRecordFailure(error)));
   };

};