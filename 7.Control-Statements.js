// conditional statements
// if (true) {
//     console.log('if block')
// }

// if (false) {
//     console.log('if block')
// }
// const print = true
// if (print=true)
// {
//     console.log('Bablu Don')
// }


const day= 6
switch(day){
    case 1:{
        console.log('Sunday')
        break;
    }
    case 2:{
        console.log('Monday')
        break;
    }
    case 3:{
        console.log('Tuesday')
        break;
    }
    case 4:{
        console.log('Wednesday')
        break;
    }
    case 5:{
        console.log('Thursday')
        break;
    }
    case 6:{
        console.log('Friday')
        break;
    }
    default:{
        console.log('Saturday')
}
}



switch(day){
    case 1:
    case 2:
    case 3:{
        console.log('Workday')
        break;
    }
    case 4:
    case 5:
    case 6:{
        console.log('Weekend')
        break;
    }
}