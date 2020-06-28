import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectInput from './SelectInput';
import ColorListboxOptions from './ColorListboxOptions';

import { selectActions } from '@redux/actions/selectActions';

export class Select extends Component {
   constructor(props) {
      super(props);
      // create a ref to store the DOM element
      this.selectRef = React.createRef();
      this.arrayOfOptionsRefs = [];
   }
   state = {
      currentAllele: undefined,
      openOptions: false,
      // arrayOfOptionsRefs: [],
      focusedOption: undefined
   };

   clearOptionsRefs = () => {
      this.arrayOfOptionsRefs = [];
   };

   handleSubmit = () => {
      const { dispatch, parentId, alleleId } = this.props;
      const info = {
         parentId: parentId,
         alleleId: alleleId,
         allele: this.state.currentAllele
      };

      dispatch(selectActions(info));
   };

   handleOpenOptions = event => {
      switch (event.type) {
         case 'click':
            this._handleOpenOptions(event);
            break;
         case 'keydown':
            if (event.key === 'Enter' || event.key === ' ') {
               this._handleOpenOptions(event);
            }
            break;
         default:
      }
   };

   _handleOpenOptions = event => {
      this.setState(
         () => {
            return {
               openOptions: !this.state.openOptions,
               focusedOption: document.activeElement.id
            };
         },
         () => {
            this.arrayOfOptionsRefs[0].focus();
         }
      );
   };

   handleOptionsEvents = (color, index, event) => {
      switch (event.type) {
         case 'click':
            this.setState(
               () => ({
                  currentAllele: color,
                  openOptions: !this.state.openOptions
               }),
               () => {
                  this.handleSubmit();
               }
            );
            this.selectRef.current.focus();
            break;
         case 'keydown':
            if (event.key === 'Enter' || event.key === ' ') {
               this.setState(
                  () => ({
                     currentAllele: color,
                     openOptions: !this.state.openOptions
                  }),
                  () => {
                     this.handleSubmit();
                  }
               );
               this.selectRef.current.focus();
            }
            if (event.key === 'ArrowUp') {
               event.preventDefault();
               this.arrayOfOptionsRefs[index - 1].focus();
               this.setState(() => ({
                  focusedOption: document.activeElement.id
               }));
            }
            if (event.key === 'ArrowDown') {
               event.preventDefault();
               this.arrayOfOptionsRefs[index + 1].focus();
               this.setState(() => ({
                  focusedOption: document.activeElement.id
               }));
            }
            if (event.key === 'Escape') {
               this.setState(
                  () => {
                     return { openOptions: !this.state.openOptions };
                  },
                  () => {
                     this.selectRef.current.focus();
                  }
               );
            }
            break;
         default:
      }
   };

   setOptionRef = element => {
      // because refs are called when ColorListboxOptions is unmounted
      // don't add it if it's null
      if (element !== null) {
         this.arrayOfOptionsRefs.push(element);
      }
   };

   render() {
      let { currentAllele, openOptions, focusedOption } = this.state;
      const { parent } = this.props;
      return (
         <div>
            <SelectInput
               handleOpenOptions={this.handleOpenOptions}
               openOptions={this.state.openOptions}
               // Use the `ref` callback to store a reference to the text input DOM
               // element in an instance field
               selectRef={this.selectRef}
               currentAllele={currentAllele}
               parent={parent}
            />
            <div>
               {openOptions === true ? (
                  <ColorListboxOptions
                     handleOptionsEvents={this.handleOptionsEvents}
                     setOptionRef={this.setOptionRef}
                     currentAllele={currentAllele}
                     focusedOption={focusedOption}
                  />
               ) : (
                     // clear the refs array when ColorListbox is not being rendered
                     [this.clearOptionsRefs(), null]
                  )}
            </div>
         </div>
      );
   }
}


function mapStateToProps({ parents }) {
   return {
      parents: parents
   };
}

export default connect(mapStateToProps)(Select);
