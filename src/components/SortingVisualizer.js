import React , { useState,useEffect} from 'react';

import Navbar from './Navbar';
import Bars  from './ArrayComponent';
import '../SortViz.css';
import {getRandomArray } from './Utility';

export const ANIMATION_SPEED = 1;//speed 1 10 100 1000
export const NO_OF_BARS = 100;
export const MIN_H = 20;
export const MAX_H = 420;
export const COLOR_CHECK = "yellow";
export const COLOR_OUT = "red";
export const COLOR_IN = "green";
export const COLOR_BAR = "turquoise";
export const COLOR_BLUE = "blue";
export const COLOR_SORTED = "blueviolet";

export const DELAY = 5;//5 milisec


 function SortingVisualizer (props) {

    const [array,setArray]=useState([]);
    const [sortType,setSortType] = useState('');
    const [arraySize, setArraySize] = useState(NO_OF_BARS);
    const [isSorting,setIsSorting] = useState(false);
    const [isSorted,setIsSorted] = useState(false);

 
    useEffect(()=>{
        setArray(getRandomArray(arraySize));
    },[])

    

    return(
        <div className = "container">
            <Navbar 
            array = {array}
            setArray = {setArray}
            setSortType = {setSortType}
            arraySize = {arraySize}
            setArraySize = {setArraySize}
            isSorting = {isSorting}
            setIsSorting = {setIsSorting}
            isSorted = {isSorted}
            setIsSorted = {setIsSorted}
            />

            <Bars  
            array = {array}
            
            sortType = {sortType}
            arraySize = {arraySize}
            isSorting = {isSorting}
            isSorted = {isSorted}
            
            />
            <footer className ="footer" >
                <div >Created by Aashutosh Shrivastav @2020<br/>
                    To know more <a className ="alink" target = "_blank" href = "https://aashutosh-shrivastav.github.io/mysite/">click here</a> 
                </div> 
            </footer>

        </div>
    );
}

export default SortingVisualizer;