
//Soal 1
function hitungRataRataDanGrade(matematika, bahasaIndonesia, bahasaInggris, ipa) {
    //kondisi
    if (matematika === undefined || bahasaIndonesia === undefined || bahasaInggris === undefined || ipa === undefined)

    if (
        matematika < 0 || matematika > 100 ||
        bahasaIndonesia < 0 || bahasaIndonesia > 100 ||
        bahasaInggris < 0 || bahasaInggris > 100 ||
        ipa < 0 || ipa > 100
    ) {
        return "nilai empat mata pelajaran";
    }

    //mengitung rata-rata
    const rataRata = (matematika + bahasaIndonesia + bahasaInggris + ipa) / 4;

    //tentukan grade
    let grade;
    if (rataRata >= 90 && rataRata <= 100) {
        grade = 'A';
    } else if (rataRata >= 80 && rataRata <= 89) {
        grade = 'B';
    } else if (rataRata >= 70 && rataRata <= 79) {
        grade = 'C';
    } else if (rataRata >= 60 && rataRata <= 69) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    return `Rata-rata = ${rataRata}\nGrade = ${grade}`;
}
const matematika = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

console.log(hitungRataRataDanGrade(matematika, bahasaIndonesia, bahasaInggris, ipa));


//Soal 2
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:{
        street: "kulas Light",
        suite: "Apt. 556",
        city: "gwenborough",
        zipcode: "92998-3472",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

//a. mengguanakan spread operator untuk merubah data
let updatedData = {
    ...data,
    name: "Wira Abdi Fazriansyah",
    email: "wiraabdi01@gmail.com"
};

//b. mengambil data street dan city menggunakan destructuring
let { address: { street, city } } = updatedData;

console.log(updatedData);
console.log(`Street: ${street}, City: ${city}`);