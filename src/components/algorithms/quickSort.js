import {testSort} from '../Utility';
export function quickSortAnimations (array){
    var animations = [];
    var arr =[...array] ;
    

    function partition(arr, start, end){
        const pivotValue = arr[end];
        let pivotIndex = start; 
        var compair = [];

        compair.push(true);
        compair.push(pivotIndex);

        animations.push(compair);
        for (let i = start; i < end; i++) {
            if (arr[i] < pivotValue) {
                compair = [];

                compair.push(false);
                compair.push(true);
                compair.push(true);
                compair.push(i);
                compair.push(end);

                animations.push(compair);


                compair = [];

                compair.push(false);
               compair.push(false);
               compair.push(i);
               compair.push(pivotIndex);
               compair.push(arr[i]);
               compair.push(arr[pivotIndex]);
   
               animations.push(compair);

                //console.log(arr[i]+" < "+pivotValue+" swap arr["+i+"] to "+arr[pivotIndex]+"swap arr["+pivotIndex+"] to "+arr[i]);

                [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
                // Moving to next element
                pivotIndex++;

                compair = [];
                compair.push(true);
                compair.push(pivotIndex);
                animations.push(compair);
            }else{

                compair = [];
             
            compair.push(false);
            compair.push(true);
            compair.push(false);
            compair.push(i);
            compair.push(end);

            animations.push(compair);
            }
        }
       // console.log("swap arr["+pivotIndex+"] to "+arr[end]+"swap arr["+end+"] to "+arr[pivotIndex]);
       compair = [];

       compair.push(false);
       compair.push(false);
       compair.push(pivotIndex);
       compair.push(end);
       compair.push(arr[pivotIndex]);
       compair.push(arr[end]);

       animations.push(compair);
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] ;
    
        
        return pivotIndex;
};


function quickSort(arr, start, end) {
    ///k is no of element before start for referenceing in animations array
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end);
    //console.log(" In the quicksort start :" +start+" end : " +end+" pivot : "+index);
    
   
    
    // Recursively apply the same logic to the left and right subarrays
    //console.log("start "+start+" end  "+(index-1));
    quickSort(arr, start, index - 1);
    //console.log("start "+(index+1)+" end  "+(end));
    quickSort(arr, index + 1, end);

    return arr;
};
/*
export function xquickSortAnimations (array){
    var animations = [];
    var arr =[...array] ;
    for (let i = start; i < end; i++) {
            
        if (arr[i] < pivotValue) {

    function partition(arr, start, end,k){
        //k is no of element before start for referenceing in animations array
        // Taking the last element as the pivot
        const pivotValue = arr[end];
        let pivotIndex = start; 
        
        console.log("start :" +start+" end : " +end+" pivot : "+pivotIndex+" k : "+k +" k+pivotIndex = "+(k+pivotIndex));
        //pi b+o (ispivot ,pivotindex)
        
        var compair = [];

        compair.push(true);
        compair.push(k+pivotIndex);

        animations.push(compair);
        

        for (let i = start; i < end; i++) {
            
            if (arr[i] < pivotValue) {
            //(ispivot = false ,iscomapir =true ,compairval = true ,i ,end )
            // compair  i and end =>y  if i<e =>g then swap (i1,i2,v1,v2) else if i>=e =>red =>o  pivot =>b =>o  
            // Swapping elements
            console.log( "in the loop comparison  = true cvaal = true ");
            console.log("arr["+i+"] < "+"arr["+end+"]  = "+arr[i] +" < "+arr[end]+" ie "+pivotValue);
            console.log("in animation push index "+(k+i)+" and "+(k+end));
            
            
            compair = [];

            compair.push(false);
            compair.push(true);
            compair.push(true);
            compair.push(k+i);
            compair.push(k+end);

            animations.push(compair);
            

            //swap ispivot  =false ,is compair  =false,i,pi,arr[i],arr[pi]
            console.log("in   loop is pivot =false iscomparison =false is swapping  ");
            console.log("swap values at index "+i+" and "+pivotIndex+" with value "+arr[i]+" and "+arr[pivotIndex]+"global index val at index ; "+(k+i)+" and"+(k+pivotIndex) );
            

            
            compair = [];

             compair.push(false);
            compair.push(false);
            compair.push(k+i);
            compair.push(k+pivotIndex);
            compair.push(arr[k+i]);
            compair.push(arr[k+pivotIndex]);

            animations.push(compair);
            
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            pivotIndex++;
            console.log("start :" +start+" end : " +end+" pivot : "+pivotIndex+" k : "+k +" k+pivotIndex = "+(k+pivotIndex));

            
            compair = [];
            compair.push(true);
            compair.push(k+pivotIndex);
            animations.push(compair);
            
            
            }
            else{
                console.log( "in the loop pivot =false comparison  = true cvaal = false ");
                console.log("arr["+i+"] > "+"arr["+end+"]  = "+arr[i] +" > "+arr[end]+" ie "+pivotValue);
                console.log("in animation push index "+(k+i)+" and "+(k+end));
                
            compair = [];
             
            compair.push(false);
            compair.push(true);
            compair.push(false);
            compair.push(k+i);
            compair.push(k+end);

            animations.push(compair);
            
            }
        }
        //pi and e =>y +r h +g o
        // Putting the pivot value in the middle
        //swap aniimation
        
            compair = [];

            compair.push(false);
            compair.push(false);
            compair.push(k+pivotIndex);
            compair.push(k+end);
            compair.push(arr[k+pivotIndex]);
            compair.push(arr[k+end]);

            animations.push(compair);
            
           console.log("out of loop is pivot =false iscomparison =false is swapping  ");
           console.log("swap values at index "+pivotIndex+" and "+end+" with value "+arr[pivotIndex]+" and "+arr[end]+"global index val at index ; "+(k+pivotIndex)+" and"+(k+end) );
           
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
        // p

        return pivotIndex;
    };


    function xquickSort(arr, start, end,k) {
        ///k is no of element before start for referenceing in animations array
        // Base case or terminating case
        if (start >= end) {
            return;
        }
        
        // Returns pivotIndex
        let index = partition(arr, start, end,k);
        console.log(" In the quicksort start :" +start+" end : " +end+" pivot : "+index+" k : "+k +" k+pivotIndex = "+(k+index));

        var compair = [];
        compair.push(true);
        compair.push(k+index);
        animations.push(compair);
        
        // Recursively apply the same logic to the left and right subarrays
        quickSort(arr, start, index - 1,k);
        quickSort(arr, index + 1, end,k+index+1);

        return arr;
    };
*/
    var temp =quickSort(arr,0,arr.length-1);

    //console.log("quicksort input " + array);

    //console.log("quick sorted array : " +temp);
  /* if(testSort(temp,array)){
        console.log("tested succesfull ");
    }
    else{
        console.log("tested unsuccesfull error in sort ");
    }
    */
    
    return animations;
    
}