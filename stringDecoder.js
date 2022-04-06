const decoder = (code) => {
    let newcode = [...code]
   let decode = []
    j = 0
    k = ``
    console.log(newcode);
    for(let i = 0; i < newcode.length; i++){
        if(newcode[i] % 1 === 0){

            // console.log(newcode[i]);
            j =  newcode[i] 
            
         
            decode.push()
        }
    }
    return decode
}
// const decoder = code => {
//     let splitStr = code.split('')
//     let result = ''

//     for (let i = 0; i < splitStr.length; i++) {
//       if (!isNaN(+splitStr[i])) {
//         i += +splitStr[i]
//       } else {
//         result += splitStr[i]
//       }
//     }

//     return result
//   }

console.log(decoder('0h2xce5ngbrdy'));