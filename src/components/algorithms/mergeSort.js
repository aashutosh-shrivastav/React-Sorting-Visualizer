import {testSort} from '../Utility';


export function mergeSortAnimations (array) {   
    
    let animations = [];

    function mergeSort(temp,startIndex){
     console.log(temp);
     console.log(startIndex);
        if(temp.length===1){
            return temp;
        }

        const middle = Math.floor(temp.length / 2);
        const left = temp.slice(0,middle);
        const right  = temp.slice(middle);

        return merge(mergeSort(left,startIndex),mergeSort(right,startIndex+left.length),startIndex);

    }

    function merge(left,right,k){
        let result  = [];
        let leftIndex = 0;
        let rightIndex = 0;
        
        var compair = [];

        while(leftIndex < left.length && rightIndex < right.length ) {

            if( left[leftIndex] < right[rightIndex] ){
                // li ri fal
                compair=[] ;

                compair.push(false);
                compair.push(k+leftIndex);
                compair.push(k+left.length+rightIndex);
                compair.push(false);
                compair.push(k+result.length);
                compair.push(left[leftIndex]);
                animations.push(compair);
                
               console.log("compairing position "+(k +leftIndex)+" and "+(k+left.length+rightIndex) +" putting value at "+k+" + "+result.length+" = "+(k+result.length)+"  = "+ left[leftIndex]);
                result.push(left[leftIndex]);
                leftIndex++;
            }else{
                //li  ri true     r[ri]
                compair=[] ;

                compair.push(false);
                compair.push(k+leftIndex);
                compair.push(k+left.length+rightIndex);
                compair.push(true);
                compair.push(k+result.length);
                compair.push(right[rightIndex]);
                animations.push(compair);
                
               console.log("compairing position "+(k +leftIndex)+" and "+(k+left.length+rightIndex) +" putting value at "+k+" + "+result.length+" = "+(k+result.length)+"  = "+ right[rightIndex]);

                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        if(leftIndex == left.length && rightIndex == right.length){
            return result;
        }
        else if(leftIndex == left.length && rightIndex < right.length){
            while(rightIndex < right.length){
                
                compair=[] ;
                compair.push(true);
                compair.push(k+result.length);
                compair.push(right[rightIndex]);
                animations.push(compair);
                
               console.log(" move value at position "+(k+left.length+rightIndex) +" to putting value at "+k+" + "+result.length+" = "+(k+result.length)+"  = "+ right[rightIndex]  );
                result.push(right[rightIndex]);
                rightIndex++;
            }
            return result;
        }
        else if(leftIndex < left.length && rightIndex == right.length){
            while(leftIndex < left.length){

                compair=[] ;
                compair.push(true);
                compair.push(k+result.length);
                compair.push(left[leftIndex]);
                animations.push(compair);
               console.log(" move value at position "+(k+leftIndex) +" to putting value at "+k+" + "+result.length+" = "+(k+result.length)+"  = "+ left[leftIndex]  );

                result.push(left[leftIndex]);
                leftIndex++;
            }
            return result;
        }
    }
    var temp = [...array];
    var arr = mergeSort(temp,0);
    console.log("mergesort input " + temp);

    console.log("merge sorted array : " +arr);
  /*  if(testSort(arr,array)){
        console.log("tested succesfull ");
    }
    else{
        console.log("tested unsuccesfull error in sort ");
    }
    */
    return animations;
}