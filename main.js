'use strict'

function fibunaci(position){
    if(position < 2){
      return position
    } else{
        return fibunaci(position-1)+fibunaci(position-2)
    }
    
    } 
    let answer1 = fibunaci(0) //0
    console.log(answer1)
    let answer2 = fibunaci(1) //1
    console.log(answer2)
    let answer13 = fibunaci(13) // 233
    console.log(answer13)
    
    