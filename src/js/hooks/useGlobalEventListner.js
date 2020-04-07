import  { useEffect } from 'react';

function useGlobalEventListner (event, func){
	useEffect(()=>{
		window.addEventListener(event, func);
		return()=>{
			window.removeEventListener(event, func);
		};
	},[func]);
}

export default useGlobalEventListner;
