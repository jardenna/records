
export const CREATE_TYPES = {
   CREATE_RECORD_START: 'CREATE_RECORD_START',
   CREATE_RECORD_SUCCESS: 'CREATE_RECORD_SUCCESS',
   CREATE_RECORD_FAILURE: 'CREATE_RECORD_FAILURE',
   CREATE_USER_REQUEST: 'CREATE_USER_REQUEST'
};

export const createStart = () => ({
   type: CREATE_TYPES.CREATE_RECORD_START
});

export const createUsersRequest = (record, fileName, file, id, imgUpdated) => {

   return ({
      type: CREATE_TYPES.CREATE_USER_REQUEST,
      payload: record,
      file,
      fileName,
      id,
      imgUpdated
   });
};

export const createRecordFailure = error => ({
   type: CREATE_TYPES.CREATE_RECORD_FAILURE,
   payload: error
});

