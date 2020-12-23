import React from 'react';
import '../SortViz.css';
import {getRandomArray } from './Utility';
import {bubbleSortAnimations } from './algorithms/bubbleSort';
import {mergeSortAnimations} from './algorithms/mergeSort';
import {insertionSortAnimations} from './algorithms/insertionSort';
import {quickSortAnimations} from './algorithms/quickSort';
import {deployAnimations,deployMergeAnimations,deployQuickAnimations} from './AnimateComponent';
import {COLOR_BAR} from './SortingVisualizer';


const Navbar = ({array, setArray,setSortType,arraySize,setArraySize,isSorting,setIsSorting,isSorted,setIsSorted}) =>{
    const resetArray = (e) => {
        if(isSorting){
            //console.log("connot reset soting is under progress");
            return;
        }
        setIsSorted(false);
        
        setArray( getRandomArray(arraySize));
        const aux = document.getElementsByClassName("array-bar");
        for(let i=0;i<arraySize;i++){
            aux[i].style.backgroundColor = COLOR_BAR;
        }
        //console.log("reset array using button ");
    }

    const bubbleSort =  (e) =>{
        e.preventDefault();
        if(isSorting){
           // console.log("connot reset soting is under progress");
            return;
        }
        if(isSorted){
             resetArray();
         }
        setIsSorting(true);
        //console.log("bubble Sort ");
        setSortType('bubble');
        const animations = bubbleSortAnimations(array);
       // console.log(animations);
        deployAnimations(animations,setIsSorting,setIsSorted);
       
    }


    const mergeSort =  (e) =>{
        e.preventDefault();
        if(isSorting){
            //console.log("connot reset soting is under progress");
            return;
        }
        if(isSorted){
            resetArray();
        }
        setIsSorting(true);

        //console.log("merge Sort ");
        setSortType('merge');
        const animations  = mergeSortAnimations(array);
        //console.log(animations );
        deployMergeAnimations(animations,setIsSorting,setIsSorted);

    }

    const insertionSort =  (e) =>{
        e.preventDefault();
        if(isSorting){
            //console.log("connot reset soting is under progress");
            return;
        }
        if(isSorted){
            resetArray();
        }
        setIsSorting(true);

        //console.log("insertion Sort ");
        setSortType('insertion');
        const animations = insertionSortAnimations(array);
        deployAnimations(animations,setIsSorting,setIsSorted);
    }

    const quickSort =  (e) =>{
        e.preventDefault();
        if(isSorting){
            //console.log("connot reset soting is under progress");
            return;
        }    
        if(isSorted){
            resetArray();
        }    
        setIsSorting(true);

        //console.log("quick Sort ");
        setSortType('quick');
        const animations =quickSortAnimations(array);
        deployQuickAnimations(animations,setIsSorting,setIsSorted);
        //console.log(animations);
    }
    

    return(
        <div className = "navbar row  row-content">
                
                <button onClick = {resetArray} className = "btn" type = "submit" >Reset Array</button>
                <button onClick = {bubbleSort} className = "btn" type = "submit" >Bubble Sort </button>
                <button onClick = {mergeSort} className = "btn" type = "submit" >Merge Sort </button>
                <button onClick = {insertionSort} className = "btn" type = "submit" >Insertion Sort </button>
                <button onClick = {quickSort} className = "btn" type = "submit" >Quick Sort </button>


        </div>
    );
}

export default Navbar;

