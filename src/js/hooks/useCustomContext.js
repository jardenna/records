import {useContext} from 'react';
import  Context  from '../Components/UdemyHooks/Reaction/context';


export const useCustomContext =()=>{
	return useContext(Context);
};
