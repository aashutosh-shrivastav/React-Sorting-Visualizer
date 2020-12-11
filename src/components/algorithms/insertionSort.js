import {testSort } from '../Utility';

export function insertionSortAnimations (array){

    var animations = [];

    var arr =[...array] ;

    for(let i=1;i<arr.length;i++){
        
        let cur = arr[i];
        let j=i-1;
        // i y
        
            while(j>-1 && cur < arr[j] ){
                // j+1, j check y r g o  
                var compair = [];

                compair.push(j);
                compair.push(j+1);
                compair.push(true);
                compair.push(arr[j]);
                compair.push(arr[j+1]);

                animations.push(compair);
                
                arr[j+1]=arr[j];
                //additional step for better anim
                arr[j] =cur;
                //decrementing for while loop
                j--;
            }   
        
        //j+1 y g o
        // j!== -1 condition for j==0 condition satisfied in the while loop
        if(j!==-1){
            var compair = [];

            compair.push(j);
            compair.push(j+1);
            compair.push(false);

            animations.push(compair);

            arr[j+1]=cur;
        }
    }

    //console.log("insertionsort input " + array);

    //console.log("insertion sorted array : " +arr);
  /* if(testSort(arr,array)){
        console.log("tested succesfull ");
    }
    else{
        console.log("tested unsuccesfull error in sort ");
    }
    */
    console.log(animations);
    return animations;

}