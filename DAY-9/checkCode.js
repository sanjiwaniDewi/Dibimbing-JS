console.log("-------------");
console.log("4. shoppingTime");
console.log("-------------");
// 4. shoppingTime[INSTRUCTIONS]Anda diminta untuk membuat sebuah function untuk menghitung berapa banyak yang bisa dibelanjakan dari saldo tersebutketentuan sebagai berikut:
// - Toko Makmur sedang melakukan SALE untuk beberapa barang, yaitu:
// Gula Pasir seharga 15000
// Beras seharga 12000
// Mie Instan seharga 2500
// Minyak Goreng seharga 18500
// Telor Ayam seharga 24600
// - output berupa object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.
// - Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
// - Jika uang yang dimiliki kurang dari 2500 maka tampilkan "Mohon maaf, uang tidak cukup"
// - Member yang berbelanja di toko Makmur akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.

//Write code here

function productCanBuy(balance, stock, product) {
    let products = product;
    let total = balance;
    if (JSON.stringify(stock) === "{}") {
        products.unshift(total);
        return products;
    } else {
        let maxPrice = 0;
        let prod = "";
        for (const key in stock) {
            if (maxPrice < stock[key]) {
                maxPrice = stock[key];
                prod = key;
            }
        }
        if (total > maxPrice) {
            products.push(prod);
            total -= maxPrice;
        }
        const newStock = {};
        for (const key in stock) {
            if (key !== prod) {
                newStock[key] = stock[key];
            }
        }
        return productCanBuy(total, newStock, products);
    }
}

const shoppingTime = (memberId, balance) => {
    const productStock = {
        "Gula Pasir": 15000,
        Beras: 12000,
        "Mie Instan": 2500,
        "Minyak Goreng": 18500,
        "Telor Ayam": 24600,
    };
    let trancastion = {
        memberId,
    };

    if (memberId == "" || memberId === undefined) {
        return "mohon maaf toko X hanya berlaku untuk member saja";
    }
    if (balance < 2500 || balance === undefined) {
        return "mohon maaf, uang tidak cukup";
    } else {
        let money = balance;
        const produtsAndPrice = productCanBuy(balance, productStock, []);
        const [changeMoney, ...listPurchased] = produtsAndPrice;
        trancastion = {
            ...trancastion,
            money,
            listPurchased,
            changeMoney,
        };
        return trancastion;
    }
};
// TEST CASES
console.log(shoppingTime("13KasdfG3D", 0)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime("12kTsasdAl", 75000));
//{ memberId: 12kTsasdAl,
// money: 75000,
// listPurchased:
//  [ 'Telor Ayam',
//    'Minyak Goreng',
//    'Gula Pasir',
//    'Beras',
//    'Mie Instan' ],
// changeMoney: 2400 }
console.log(shoppingTime("13KasdfG3D", 30000));
//{ memberId: '13KasdfG3D',
// money: 30000,
// listPurchased:
//  [ 'Telor Ayam', ‘Mie Ayam’ ],
// changeMoney: 2900 }
console.log(shoppingTime("", 1500)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdRxa53", 1500)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdRxa53"));
