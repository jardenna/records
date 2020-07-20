import React from 'react';

import useCustomContext from '@hooks/useCustomContext';
import defaultImg from '@images/default.png';
import Figure from '@commonReact/Figure';

function ImagePreview() {
   const formContext = useCustomContext();
   const { previewUrl, noImgUpload, imgUpload, previewUrlName } = formContext;

   return (
      <section className="flex-item image-preview-wrapper">
         <h2>{imgUpload}</h2>
         {previewUrl === '' ?
            <div className="image-preview" >
               <Figure
                  src={defaultImg}
                  alt='preview image'
                  figcaption={noImgUpload}
               />

            </div> :
            <Figure src={previewUrl} alt={previewUrlName} figcaption={previewUrlName} />

         }
      </section>
   );
}

export default ImagePreview;
