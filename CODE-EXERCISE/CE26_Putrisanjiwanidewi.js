/* 

butalah output dari contoh berikut 
manfaatkan perulangan while dan for untuk membuat segitiga
manfaatkan array

contoh tower 3 lantai
      *  
     *** 
    *****
  
  EXPECTED OUTPUT :
       *
      ***
     ***** 
    ******* 
   *********
  ***********
  
  NOTE: berikan comment penjelasan fungsi dari kode pada baris yang menurut anda penting
*/

function towerBuilder(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        let print = "";
        for (let j = n; j >= 1; j--) {
            if (j === i) {
                for (let x = 1; x <= i + (i - 1); x++) {
                    print += "*";
                }
                break;
            }
            print += " ";
        }
        result += i === n ? `${print}` : `${print}\n`;
    }
    return result;
}

console.log(towerBuilder(6));
