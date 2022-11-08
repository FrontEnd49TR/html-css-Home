
// Eugene Kuzenko

// 1. Write function ulSurround that surrounds array of strings inside <ul></ul> element. 
//    1.1 Example of input array
//           let strings=["abc","lmn","cd"]
//     1.2 Output array for the above example- let ulSurrounding=ulSurround(strings)
//           ["<ul>","<li>abc</li>","<li>lmn</li>","<li>cd</li>","</ul>"]

console.log(ulSurround(["abc","lmn","cd"]));

function ulSurround(strings) {
   let ulSurrounding = [];
    let temp = "";
    for( let i = 0; i < strings.length; i++) {
        temp = "<li>"+strings[i]+"<li>";
        ulSurrounding[i] = temp;
    }
    ulSurrounding.splice(0,0,"<ul>");
    ulSurrounding.push("<ul>");
    return ulSurrounding;
}

// 2. Write function count that returns how many times a given element encountered in a given array
//    2.1 Example of input array
//        let strings=["abc","lmn","cd","abc","abc"]
//     2.2 Output for the above example count(strings,"abc") will be 3 and count(strings,"ab") will be 0
    
//  console.log(count(["abc","lmn","cd","abc","abc"]));

//  function count(strings) {
//    // for (let i = 0; i < strings.length; i++) {
//        return strings.reduce(function(counter,elem1,elem2,arr){
//            if (counter == arr[elem2] ) { elem2 += 1}
//            console.log(counter);
           //console.log(elem1);
          //console.log(elem2);
           //console.log(arr);
           
            
           // return counter;
    //   });
       
    //}
   // return strings;

  //  }


// 3. Write function arrayCopy that gets the following parameters : function arrayCopy(src,srcPos,dst,dstPos,length) {....}
// where: src - source array, srcPos - index of the source array, dst - array destination, dstPos - index of destination array,
// length - number of elements. This function should copy length elements from source array beginning from srcPos index to
// destination array from dstPos index
// Example: let arS = [1,2,3,4,5,6,7]; let arD = [10,20,30,40,50,60,70]
// arrrayCopy(arS, 3, arD, 4, 3); Result: arS is not updated, arD = [10,20,30,40,4,5,6,50,60,70]

let arS = [1,2,3,4,5,6,7];
let arD = [10,20,30,40,50,60,70];

console.log("Array is : ",arrayCopy(arS,3,arD,4,3));

function arrayCopy(src,srcPos,dst,dstPos,length) {
     dst.splice(dstPos,0,src.slice(srcPos,srcPos+length));
   return dst;
 }

 // 4. Write function move(array,index,offset) that in a given array moves element at a given index on a given offset positions (if offset > 0 -> to right, otherwise to left).
//   Examples: let numbers=[1,2,3,4,5,6,7]; move(numbers,3,-1) -> numbers=[1,2,4,3,5,6,7]; (element at index 3 (4) is moved on 1 position left)
// move(numbers,2,4)->numbers=[1,2,4,5,6,7,3]. (element at index 2 (3) is moved on 4 positions right) 
// Note: all examples imply the original array of numbers ( let numbers=[1,2,3,4,5,6,7])


let numbers = [1,2,3,4,5,6,7];

console.log("array is : ",move(numbers,3,-1));

function move(array,index,offset) {
  
    array.splice(index+offset,0,array.splice(index,1));
    
  return array;
}