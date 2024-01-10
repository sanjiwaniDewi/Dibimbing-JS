// Soal:
// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App on their phones --
// everytime you press the button it sends you an array of one-letter strings representing directions to walk
// (eg. ['n', 's', 'w', 'e']).
// You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
// so create a function that will return true if the walk the app gives you will take you exactly ten minutes
// (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
// It will never give you an empty array (that's not a walk, that's standing still!).

// cartesius
//             north
//               x
//               |
//               |
//               |
//  west   ------o------y  east
//               |
//               |
//               |
//             south

// Expeceted Output :
// true
// false
// false
// false

// Tidak boleh langsung print expected output
// NOTE : Berikan comment penjelasan pada baris kode yang penting
// CLUE : Manfaatkan perulangan dan pengkondisian

// Jawaban:
function isValidWalk(walk) {
    // write your code here
    const newWalk = [];
    if (walk.length === 10) {
        for (const char of walk) {
            switch (char) {
                case "n":
                    newWalk.push(1);
                    break;
                case "s":
                    newWalk.push(-1);
                    break;

                case "e":
                    newWalk.push(-2);
                    break;
                case "w":
                    newWalk.push(2);
                    break;
                default:
                    break;
            }
        }
        let total = newWalk.reduce((add, a) => add + a);
        return total === 0 ? true : false;
    }

    return false;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
    isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
