import axios from 'axios';

import { handleResponse } from '@redux/utils';

import endpoints from '@common/endpoints';

export const UPDATE_TYPES = {
   UPDATE_RECORD_START: 'UPDATE_RECORD_START',
   UPDATE_RECORD_SUCCES: 'UPDATE_RECORD_SUCCES',
   UPDATE_RECORD_FAILURE: 'UPDATE_RECORD_FAILURE'
};


const updateRecordStart = () => ({
   type: UPDATE_TYPES.UPDATE_RECORD_START
});

const updateRecordFailure = (error) => ({
   type: UPDATE_TYPES.UPDATE_RECORD_FAILURE,
   payload: error
});

const recordUpdated = (id, record) => {

   return ({
      type: UPDATE_TYPES.UPDATE_RECORD_SUCCES,
      payload: record,
      id
   });
};

export const updateRecordSuccess = (id, record) => {

   const url = endpoints.records;
   const path = url + id;

   return dispatch => {
      dispatch(updateRecordStart());
      axios.patch(path)
         //.then(handleResponse)
         .then(() => dispatch(recordUpdated(id, record)))

         .catch(error => dispatch(updateRecordFailure(error)));
   };




};