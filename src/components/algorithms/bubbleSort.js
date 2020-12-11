import {testSort} from '../Utility';

export function  bubbleSortAnimations (array){

    var arr =[...array] ;
    
    const animations = [];
    for(let i = 0; i <arr.length;i++){
       

        for(let j =1;j<arr.length - i ;j++){

            
            var compair = [];
            compair.push(j-1);
            compair.push(j);

            if(arr[j-1]>arr[j]){
                compair.push(true);
                compair.push(arr[j-1]);
                compair.push(arr[j]);
                
                animations.push(compair);
                

                var t=arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = t;

                

            }
            else{
                compair.push(false);
                animations.push(compair);

                

            }

            

        }
    }
    //console.log("bubblesort input " + array);

    //console.log("bubblesortd array : " +arr);
  /*  if(testSort(arr,array)){
        console.log("tested succesfull ");
    }
    else{
        console.log("tested unsuccesfull error in sort ");
    }
    */
   //console.log(animations);
    return animations;
    

}

