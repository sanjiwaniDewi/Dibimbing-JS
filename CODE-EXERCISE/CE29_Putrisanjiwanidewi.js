/* 

Buatlah fungsi untuk menghitung perolehan medali dari setiap negara 
  
  NOTE: berikan comment penjelasan fungsi dari kode pada baris yang menurut anda penting
*/

function perolehan_medali(arr_medali) {
    //write your code here
    const medals = [];

    // colect type of medal
    const medal = [...new Set(arr_medali.map((a) => a[1]))];

    for (const itr of arr_medali) {
        //assign key value
        const country = {};
        if (
            medals.length == 0 ||
            !medals.map((a) => a["negara"]).includes(itr[0])
        ) {
            country["negara"] = itr[0];
            medal.map((a) => (country[a] = 0));
            medals.push(country);
        }
        //count each medal
        medals.forEach((element) => {
            if (element["negara"] == itr[0]) {
                itr.shift();
                for (const med of itr) {
                    element[med]++;
                }
            }
        });
    }
    return medals;
}

let data_medali = [
    ["Indonesia", "emas"],
    ["India", "perak"],
    ["Korea Selatan", "emas"],
    ["India", "perak"],
    ["India", "emas"],
    ["Indonesia", "perak"],
    ["Indonesia", "emas"],
    ["India", "perunggu"],
];

console.log(perolehan_medali(data_medali));

/* 

Expected Output:
[
    { negara: "Indonesia", emas: 2, perak: 1, perunggu: 0 },
    { negara: "India", emas: 1, perak: 2, perunggu: 1 },
    { negara: "Korea Selatan", emas: 1, perak: 0, perunggu: 0 },
]
*/
