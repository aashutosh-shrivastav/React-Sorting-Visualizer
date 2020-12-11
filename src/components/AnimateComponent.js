import { ANIMATION_SPEED,DELAY,MAX_H,MIN_H,COLOR_BAR,COLOR_CHECK,COLOR_IN,COLOR_OUT,COLOR_BLUE,COLOR_SORTED,NO_OF_BARS,} from './SortingVisualizer';
import {colorChangeRequest,heightChangeRequest,singlecolorChangeRequest,twocolorChangeRequest} from './Utility';

export function deployAnimations(animations,setIsSorting,setIsSorted){

    var time = 0;
    
     

    

    for(let i=0;i<animations.length;i++)   {

        if(animations[i][2]){
            
            const index1 = animations[i][0];
            const index2 = animations[i][1];
            const height1 = animations[i][3];
            const height2 = animations[i][4];
            
            colorChangeRequest(index1,index2,COLOR_CHECK,time);//yellow
            time++;
            colorChangeRequest(index1,index2,COLOR_OUT,time);//red
            time++;
            heightChangeRequest(index1,height2,time);
            time++;
            heightChangeRequest(index2,height1,time);
            time++;
            colorChangeRequest(index1,index2,COLOR_IN,time);//green
            time++;
             colorChangeRequest(index1,index2,COLOR_BAR,time);//torqoise
            time++;
        }else{
            const index1 = animations[i][0];
            const index2 = animations[i][1];           
            
            colorChangeRequest(index1,index2,COLOR_CHECK,time);//yellow
            time++;
            colorChangeRequest(index1,index2,COLOR_IN,time);//green
            time++;
            colorChangeRequest(index1,index2,COLOR_BAR,time);//torqoise
            time++;
        }
    }

    console.log("animation loop end setTimeout stack prepared ;");
    sortCompletedAnimation(time,setIsSorting,setIsSorted);

    
}

//merge sort animation reader and  deployer 
export function deployMergeAnimations(animations,setIsSorting,setIsSorted){


    var time = 0;
     for(let i=0;i<animations.length;i++)   {
         if(!animations[i][0]){
             //compair index1 and 2
             const index1 = animations[i][1];
             const index2 = animations[i][2];

             if(animations[i][3]){
                 // change height with right < left 
                colorChangeRequest(index1,index2,COLOR_CHECK,time);
                time++;
                colorChangeRequest(index1,index2,COLOR_OUT,time);
                time++;
                
                heightChangeRequest(animations[i][4],animations[i][5],time);
                time++;
                twocolorChangeRequest(index1,index2,COLOR_IN,COLOR_BLUE,time);
                time++;
                colorChangeRequest(index1,index2,COLOR_BAR,time);//torqoise
                time++;



             }else{
             // change height with right > left 

             colorChangeRequest(index1,index2,COLOR_CHECK,time);
             time++;
             colorChangeRequest(index1,index2,COLOR_IN,time);
             time++;
             
             heightChangeRequest(animations[i][4],animations[i][5],time);
             time++;
             
             colorChangeRequest(index1,index2,COLOR_BAR,time);//torqoise
             time++;

             }


         }else{
            const index1 = animations[i][1];

             
             singlecolorChangeRequest(index1,COLOR_BLUE,time);
             time++;
             heightChangeRequest(index1,animations[i][2],time);
             time++;
             singlecolorChangeRequest(index1,COLOR_IN,time);
             time++;
             singlecolorChangeRequest(index1,COLOR_BAR,time);
             time++;
         }
     }

console.log("merge sort animation stack started ");
sortCompletedAnimation(time,setIsSorting,setIsSorted);

}
//quick sort aniamtions reader and deployer
export function deployQuickAnimations(animations,setIsSorting,setIsSorted){

    var time =0;

    for(let i=0;i<animations.length;i++){

        if(animations[i][0]){
            //is pivot
            const index1 = animations[i][1];
            singlecolorChangeRequest(index1,COLOR_BLUE,time);
            time++;
            singlecolorChangeRequest(index1,COLOR_BAR,time);
            time++;
        }
        else{
            //not a pivot but comparison or swap
            if(animations[i][1]){
                //comparison is accuring 
                const index1 = animations[i][3];
                const index2 = animations[i][4];

                if(animations[i][2]){
                    // green make smaller element  on left side by swapping in  next animation
                    colorChangeRequest(index1,index2,COLOR_CHECK,time);
                    time++;
                    colorChangeRequest(index1,index2,COLOR_IN,time);
                    time++;
                    colorChangeRequest(index1,index2,COLOR_BAR,time);
                    time++;


                }else{
                    //red already on the right side of pivot
                    colorChangeRequest(index1,index2,COLOR_CHECK,time);
                    time++;
                    colorChangeRequest(index1,index2,COLOR_OUT,time);
                    time++;
                    colorChangeRequest(index1,index2,COLOR_BAR,time);
                    time++;
                }

            }else{
                //not  a pivot and compairison then its swap aniamation
                const index1 = animations[i][2];
                const index2 = animations[i][3];
                const val1 = animations[i][4];
                const val2 = animations[i][5];

                colorChangeRequest(index1,index2,COLOR_BLUE,time);
                time++;
                heightChangeRequest(index1,val2,time);
                time++;
                heightChangeRequest(index2,val1,time);
                time++;
                colorChangeRequest(index1,index2,COLOR_BAR,time);
                time++;

            }
        }


    }

    console.log("animation for quick sort loaded");

    sortCompletedAnimation(time,setIsSorting,setIsSorted);

}

export function sortCompletedAnimation(time,setIsSorting,setIsSorted){
    for(let i=0;i<NO_OF_BARS;i++){
        singlecolorChangeRequest(i,COLOR_SORTED,time);
        time++;

    }
    setTimeout(()=>{
        setIsSorting(false);
        setIsSorted(true);
    },time);
    console.log("sorting ended at time t = "+(time*DELAY)+"sec" );
}

