import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import Form from '@formElements/Form';
import useFormValidation from '@hooks/useFormValidation';
import Context from '@commonReact/context';
import { fetchDetails } from '@redux/actions/detailActions';
import { updateRecordSuccess } from '@redux/actions/updateActions';
import { createRecordRequest } from '@redux/actions/createActions';

import { validateUpdate } from '@common/validateUpdate';

function Update({ createRecordRequest, fetchDetails, updateRecordSuccess, details }) {
   const id = useParams().id;
   React.useEffect(() => {
      if (id) {
         fetchDetails(id);
      }
   }, []);

   let history = useHistory();
   const recordId = {
      artist: details.artist,
      title: details.title,
      prodYear: details.prodYear,
      label: details.label,
      origin: details.origin,
      price: details.price,
      recordNo: details.recordNo,
      numOfRecords: details.numOfRecords,
      released: details.released,
      info: details.info
   };


   const recordNoId = {
      artist: '',
      title: '',
      prodYear: '',
      label: '',
      origin: '',
      price: '',
      recordNo: '',
      numOfRecords: '',
      released: '',
      info: ''
   };

   const recordObj = id ? recordId : recordNoId;

   const handleUpdateOrCreate = () => {

      if (id) {
         updateRecordSuccess(id, values, imgUpdated, fileName, file);
         history.push('/details/' + id);
      } else {
         createRecordRequest(values, fileName, file);
         history.push('/all');
      }
   };

   const { handleSubmit,
      handleChange,
      handleBlur,
      values,
      errors,
      file,
      fileName,
      imgUpdated } = useFormValidation(recordObj, handleUpdateOrCreate, validateUpdate, id);

   const { artist, title, prodYear, label, origin, price, recordNo, numOfRecords, released, info } = values;

   const inputs = [
      {
         type: 'text',
         name: 'artist',
         inputIdentifier: 'artist',
         label: 'Gruppe / Kunstner',
         isRequired: true,
         value: artist,
         error: errors.artist
      },
      {
         type: 'text',
         name: 'title',
         inputIdentifier: 'title',
         label: 'Titel',
         isRequired: true,
         value: title,
         error: errors.title
      },
      {
         type: 'text',
         name: 'prodYear',
         inputIdentifier: 'prodYear',
         label: 'Produktions år',
         isRequired: true,
         value: prodYear,
         error: errors.prodYear
      },
      {
         type: 'text',
         name: 'label',
         inputIdentifier: 'label',
         label: 'Plademærke',
         isRequired: false,
         value: label
      },
      {
         type: 'textarea',
         name: 'origin',
         inputIdentifier: 'origin',
         label: 'Oprindelse',
         isRequired: false,
         value: origin
      },
      {
         type: 'text',
         name: 'price',
         inputIdentifier: 'price',
         label: 'Pris',
         isRequired: false,
         value: price
      },
      {
         type: 'text',
         name: 'recordNo',
         inputIdentifier: 'recordNo',
         label: 'Pladenummer',
         isRequired: false,
         value: recordNo
      },
      {
         type: 'text',
         name: 'numOfRecords',
         inputIdentifier: 'numOfRecords',
         label: 'Antal LP(er)',
         isRequired: false,
         value: numOfRecords
      },
      {
         type: 'text',
         name: 'released',
         inputIdentifier: 'released',
         label: 'Senest udgivet',
         isRequired: false,
         value: released

      },
      {
         type: 'textarea',
         name: 'info',
         inputIdentifier: 'info',
         label: 'Værd at vide',
         isRequired: false,
         value: info
      },
      {
         type: 'file',
         name: 'photo',
         inputIdentifier: 'cover',
         label: 'Indsæt billede',
         isRequired: false
      }

   ];

   const formObj = {
      inputs,
      btnText: 'Submit',
      onSubmit: handleSubmit,
      onChange: handleChange,
      onBlur: handleBlur,
      className: 'create-album flex-wrapper'
   };



   return (
      <Context.Provider value={formObj}>
         <Form />

      </Context.Provider>
   );
}

const mapStateToProps = (state) => ({
   details: state.recordDetails.record
});



export default connect(mapStateToProps, { createRecordRequest, fetchDetails, updateRecordSuccess })(Update);
