import  {MAX_H,MIN_H,DELAY} from './SortingVisualizer';

export function getRandomArray (arraySize){
    const arr = [];
    for(let i=0;i<arraySize;i++){
        arr.push(Math.floor(Math.random()*(MAX_H - MIN_H +1)+MIN_H));
    }
    //console.log("random array generated in Utility getrandom array ");
   return arr ;
}

export const swap =(item1,item2 )=>{
    
    var temp = item1;
    item1 = item2;
    item2 = temp;

    return ;
}

export function testSort(arr1,arr2){

    var arr3 =arr2;
    arr3.sort(function(a,b){return a-b});
    if(JSON.stringify(arr1)==JSON.stringify(arr3)){
        return true;
    }else{
        return false;
    }
}

// color manipulating function
//tow index same color
export const colorChangeRequest = (idx1,idx2,color,Time) =>{
    //const aux = document.getElementsByClassName("array-bar");
    setTimeout(()=>{
        //console.log("index : "+idx1+" and index :"+idx2+" color changed to : "+ color +" at time  t:"+Time+" * "+ DELAY+" =  "+Time*DELAY+" ms");

        const aux = document.getElementsByClassName("array-bar");

        aux[idx1].style.backgroundColor =color;
        aux[idx2].style.backgroundColor =color;

    },Time*DELAY);

}
//two index diffrent color
export const twocolorChangeRequest = (idx1,idx2,color1,color2,Time) =>{
    //const aux = document.getElementsByClassName("array-bar");
    setTimeout(()=>{
       // console.log("index : "+idx1+" and index :"+idx2+" color changed to : "+ color +" at time  t:"+Time+" * "+ DELAY+" =  "+Time*DELAY+" ms");

        const aux = document.getElementsByClassName("array-bar");

        aux[idx1].style.backgroundColor =color1;
        aux[idx2].style.backgroundColor =color2;

    },Time*DELAY);

}
//single index single color

export  const singlecolorChangeRequest = (idx1,color1,Time) =>{
    //const aux = document.getElementsByClassName("array-bar");
    setTimeout(()=>{
       // console.log("index : "+idx1+" and index :"+idx2+" color changed to : "+ color +" at time  t:"+Time+" * "+ DELAY+" =  "+Time*DELAY+" ms");

        const aux = document.getElementsByClassName("array-bar");

        aux[idx1].style.backgroundColor =color1;

    },Time*DELAY);
}

// height manipulating function

export const heightChangeRequest = (idx,height,Time) =>{

    setTimeout(()=>{
        //console.log("index : "+idx+" height changed to : "+ height +" at time  t: "+Time+" * "+ DELAY+" =  "+Time*DELAY+" ms");
    const aux = document.getElementsByClassName("array-bar");

    aux[idx].style.height = `${height}px`;

    },Time*DELAY);
}

