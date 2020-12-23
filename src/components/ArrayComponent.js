import React ,{useState , useEffect}from 'react';
import {COLOR_BAR } from './SortingVisualizer';
import '../SortViz.css'; 


 function Bars ({ array,  sortType, arraySize,isSorting,isSorted})  {


    

    
    
    
    


    return(
        <div className = "row ">
            <div className = "col info-display">
                State information<hr/>
                array size : {arraySize}
                <br/>
                array : {JSON.stringify(array)}
                <br/>
                sort type : {sortType}
                <br />
                is Sorting : {isSorting ? "Yes ": "No"}
                <br/>
                is Sorted : {isSorted ? "Yes" :"No"}
                

            </div>
            <div className = "col array-container">
                {
                    array.map((bar,index)=>{
                        return(
                            <div className = "array-bar" 
                                key = {index}
                                style={{
                                    height : `${bar}px`,
                                    backgroundColor : COLOR_BAR
                                    }}>
                                    .
                            </div>
                        );
                    })
                }
            </div>

            
        </div>
    );
}

export default Bars ;