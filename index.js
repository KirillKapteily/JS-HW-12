//1 ✅
const user = {
    name: "kirill",
    hobby: "programming",
    premium: true,
    mood: "ok",

    change(newMood, newHobby, newPremium) {
        this.hobby = newHobby;
        this.mood = newMood;
        this.premium = newPremium;
    }
};
user.change("happy", "skydiving", false)

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}
const keys = Object.keys(user);
console.log(keys);

//2 ✅
const countProps = function (userr) {
    const allValues = [];
    return Object.keys(userr).length;
}

console.log(countProps(user));

//3✅
const employees = [
    { name1: "Dan", isBest: 12, salary: 1000 },
    { name1: "David", isBest: 23, salary: 2000 }
]


const findBestEmployee = function (employees) {
    let names = []
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].isBest > 20) {
            names = employees[i].name1;
        }
    }
    return names;
}

console.log(findBestEmployee(employees));

//4✅
const countTotalSalary = function (salary) {
    for (let i = 0; i < salary.length; i++) {
        const countTotalSalary = employees[i].salary + employees[i].isBest;
        return countTotalSalary;
    }
}
console.log(countTotalSalary(employees));

//5✅
let arr = [
    { name2: "orange", color: "orange", price: 5 },
    { name2: "Apple", color: "red", price: 3 },
    { name2: "Cherry", color: "dark-red", price: 1 },
];

const getAllPropValues = function (arr, prop) {
    let allProps = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].hasOwnProperty(prop)) {
            allProps.push(arr[i][prop]);
        }
    }
    return allProps;
}

console.log(getAllPropValues(arr, "name2"));

//6✅
let allProdcuts = [
    { productName: "apple", price: 6, category: "food", stock: 12 },
    { productName: "banana", price: 9, category: "food", stock: 4 },
    { productName: "cherry", price: 3, category: "food", stock: 7 },
    { productName: "straberry", price: 5, category: "food", stock: 10 },
    { productName: "pear", price: 7, category: "food", stock: 6 },
    { productName: "lemon", price: 4, category: "food", stock: 13 },
]

const calculateTotalPrice = function (productName) {
    let result = 0;
    for (let i = 0; i < productName.length; i++) {
        result += productName[i].price * productName[i].stock;
    }
    return result;
}

console.log(calculateTotalPrice(allProdcuts));
