export const FETCH_FIRST_SIX = {
   FETCH_RECORDS_START: 'FETCH_RECORDS_START',
   FETCH_RECORDS_SUCCESS: 'FETCH_RECORDS_SUCCESS',
   FETCH_RECORDS_FAILURE: 'FETCH_RECORDS_FAILURE'
};

//Export to component
export const fetchFirstSixStart = () => ({
   type: FETCH_FIRST_SIX.FETCH_RECORDS_START
});

export const fetchFirstSixFailure = error => ({
   type: FETCH_FIRST_SIX.FETCH_RECORDS_FAILURE,
   payload: error
});

export const firstSixFetched = firstSix => {
   return ({
      type: FETCH_FIRST_SIX.FETCH_RECORDS_SUCCESS,
      payload: firstSix
   });
};

