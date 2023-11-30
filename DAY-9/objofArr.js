//manipulate array of object

const data = [
    {
        id: 1,
        name: "putri",
        class: "2A",
        hoby: ["fishing", "cycleing", "swiming"],
    },
    {
        id: 2,
        name: "sanji",
        class: "2B",
        hoby: ["fishing", "cycleing", "swiming"],
    },
    {
        id: 3,
        name: "dewi",
        class: "2D",
        hoby: ["fishing", "cycleing", "swiming"],
    },
];

const editHobi = (data, id, hoby) => {
    let index = NaN;
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            index = i;
        }
    }

    if (index !== NaN) {
        data[index] = {
            //mengambil nilai datanya
            ...data[index],
            //mengganti key yang sama
            //kalo beda dia di assign baru sesuai namanya
            hoby,
        };
    }
    return data;
};

console.log(editHobi(data, 1, ["painting", "cooking"]));
