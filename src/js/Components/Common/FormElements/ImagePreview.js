import React from 'react';

import useCustomContext from '@hooks/useCustomContext';
import Figure from '@commonReact/Figure';

function ImagePreview() {
   const formContext = useCustomContext();
   const { previewUrl, imgUpload, uploadedPhoto, file, altText } = formContext;

   return (
      <section className="flex-item image-preview-wrapper">

         <h2>{imgUpload}</h2>
         {previewUrl === '' ?
            <div className="image-preview" >

               <Figure
                  src={uploadedPhoto}
                  alt={altText}
               />

            </div> :
            <Figure src={previewUrl} alt={file.name} figcaption={file.name} />

         }
      </section>
   );
}

export default ImagePreview;
