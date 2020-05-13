import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';


import Form from '@formElements/Form';
import { fetchDetails } from '@redux/actions/detailActions';
import { updateRecordSuccess } from '@redux/actions/updateActions';
import { createUsersRequest } from '@redux/actions/createActions';


function Update({ createUsersRequest, fetchDetails, updateRecordSuccess, details }) {


   const id = useParams().id;
   React.useEffect(() => {

      if (id) {
         fetchDetails(id);
         setValues({
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
         });
      }
   }, []);

   const recordObj = {
      artist: '',
      title: '',
      prodYear: '',
      label: '',
      origin: '',
      price: ' ',
      recordNo: '',
      numOfRecords: ' ',
      released: ' ',
      info: ''
   };


   const [values, setValues] = React.useState(recordObj);
   const [file, setFile] = React.useState('');
   const [fileName, setFileName] = React.useState('');
   const [imgUpdated, setImgUpdated] = React.useState(false);

   function handleChange(e) {
      const { name, value } = e.target;
      setValues({
         ...values,
         [name]: value
      });

      if (name === 'photo') {
         setFile(e.target.files[0]);
         setFileName(name);
         setImgUpdated(true);
      }
   }

   function handleSubmit(e) {


      e.preventDefault();
      if (id) {
         updateRecordSuccess(id, values, imgUpdated, fileName, file);
      } else {
         createUsersRequest(values, fileName, file);


         setValues(recordObj);
      }

   }

   const { artist, title, prodYear, label, origin, price, recordNo, numOfRecords, released, info } = values;

   const inputs = [
      {
         type: 'text',
         name: 'artist',
         inputIdentifier: 'artist',
         label: 'Gruppe / Kunstner',
         isRequired: true,
         value: artist

      },
      {
         type: 'text',
         name: 'title',
         inputIdentifier: 'title',
         label: 'Titel',
         isRequired: true,
         value: title

      },
      {
         type: 'text',
         name: 'prodYear',
         inputIdentifier: 'prodYear',
         label: 'Produktions år',
         isRequired: true,
         value: prodYear
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




   return (
      <div>

         <Form
            inputs={inputs}
            btnText='Submit'
            btnClass='primary'
            onSubmit={handleSubmit}
            onChange={handleChange}
         />

      </div >

   );

}


const mapStateToProps = (state) => ({
   details: state.recordDetails.record
});



export default connect(mapStateToProps, { createUsersRequest, fetchDetails, updateRecordSuccess })(Update);
