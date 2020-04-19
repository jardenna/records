//import React, { Fragment } from 'react';
//import { Labels, Inputs, TextArea } from '../../data/Labels';

//import { ImageUpload } from '../ImageUpload';
//import { PageHeader } from './PageHeader';

//export const Form = ({ heading, value }) => (

   
//    <Fragment>

//        <PageHeader heading={heading}/>aaa
//        <div className="flex-wrapper create-wrapper">
//            {Inputs.map((item, i) => (
//                <section key={i} className="flex-item">
//                    <label className={item.Requered} htmlFor={item.Name}>{item.Label}</label>
//                    <input id={item.Name} name={item.Name} type="text" value={value} />
//                </section>
//            ))}

//            {TextArea.map((item, i) => (
//                <section key={i} className="flex-item">
//                    <label htmlFor={item.Name}>{item.Label}</label>
//                    <textarea id={item.Name} name={item.Name}></textarea>
//                </section>
//            ))}



//        </div>
//        <ImageUpload />
//    </Fragment>
//);