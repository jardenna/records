import React from 'react';
import SelectOptions from './SelectOptions';


const useKeyPress = function (targetKey) {
   const [keyPressed, setKeyPressed] = React.useState(false);

   function downHandler({ key }) {

      if (key === targetKey) {
         setKeyPressed(true);
      }
   }

   const upHandler = ({ key }) => {
      if (key === targetKey) {
         setKeyPressed(false);
      }
   };

   React.useEffect(() => {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);

      return () => {
         window.removeEventListener('keydown', downHandler);
         window.removeEventListener('keyup', upHandler);
      };
   });

   return keyPressed;
};

const items = [
   { id: 1, name: 'Josh Weirs' },
   { id: 2, name: 'Sarah Weir' },
   { id: 3, name: 'Alicia Weir' },
   { id: 4, name: 'Doo Weir' },
   { id: 5, name: 'Grooft Weir' }
];



const Select = () => {
   const [selected, setSelected] = React.useState('');
   const downPress = useKeyPress('ArrowDown');
   const upPress = useKeyPress('ArrowUp');
   const enterPress = useKeyPress('Enter');
   const enterEsc = useKeyPress('Escape');

   const [selectedItem, setSelectedItem] = React.useState(0);

   React.useEffect(() => {
      if (enterEsc) {
         setSelected(items[selectedItem]);
      }
   }, [enterEsc]);


   React.useEffect(() => {
      if (items.length && downPress) {
         setSelectedItem(prevState =>
            prevState < items.length - 1 ? prevState + 1 : prevState
         );
      }
   }, [downPress]);
   React.useEffect(() => {
      if (items.length && upPress) {
         setSelectedItem(prevState => (prevState > 0 ? prevState - 1 : prevState));
      }
   }, [upPress]);
   React.useEffect(() => {
      if (items.length && enterPress) {
         setSelected(items[selectedItem]);
      }
   }, [selectedItem, enterPress]);

   return (
      <div>

         <span>Selected: {selected ? selected.name : 'none'}</span>
         {items.map((item, i) => (
            <SelectOptions
               key={item.id}
               active={i === selectedItem}
               item={item}
               setSelected={setSelected}

            />
         ))}
      </div>
   );
};



export default Select;
