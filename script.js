let num = +prompt('son kiriting')
while(isNaN(num) || num == 0) {
    num =+prompt('iltomos son kiriting')
}

// let box = ""

// for (let i = 0; i < num; i++) { 
//     for (let p = 0; p < num; p++) {
//         if (p == i || p == 0 || i == 0 ) {
//             box+= "⬜"
//         }else {
//             box+="⬛"
//         }
//         box = ""
//         console.log(box);
//     }   
// }

// let last = ''

// for(let i = 0 ; i < num; i++){
//   for(let p = 0 ; p < num; p++){
//     if(p == i || i == 0|| p == 0 || p == num - 1 || i == num -1 ){
//       last += '⬛'
//     }
//     else{
//       last += '⬜'
//     }
//   }
//   console.log(last);
//   last=''
// }

var chiziq = "";
for (var i = 0; i < num; i++) {
    for (let p = 0; p < num; p++) {
    if (i == p || i == 0|| p == 0 || p == num - 1 || i == num -1 ) {
    chiziq += "⬛️";
  } else {
    chiziq += "⬜️";
  }
    }
    console.log(chiziq);
    chiziq=""
  
}

// console.log(chiziq);
