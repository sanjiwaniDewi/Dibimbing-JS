/**
 * Filter Array
 *
 * Diberikan data berupa array object, lalu lakukan filter untuk menampilkan data yang memiliki grade diatas 7
 *
 * Hanya boleh menggunakan looping for (tidak boleh menggunakan method filter)
 */

students = [
    { name: "Andi", grade: 7.5 },
    { name: "Ardi", grade: 9 },
    { name: "Ahmad", grade: 7 },
    { name: "Anang", grade: 6 },
    { name: "Amir", grade: 8 },
];

/*

expected output:

[
  { name: 'Andi', grade: 7.5 },
  { name: 'Ardi', grade: 9 },
  { name: 'Amir', grade: 8 }
]

*/

const filterGrade7 = (dataStudent) => {
    // sesuaikan
    let data = [];
    for (let index = 0; index < dataStudent.length; index++) {
        if (dataStudent[index].grade > 7) {
            // data.push(dataStudent[index]);
            data = [...data, dataStudent[index]];
        }
    }
    return data;
};

let filteredStudents = filterGrade7(students);
console.log(filteredStudents);
