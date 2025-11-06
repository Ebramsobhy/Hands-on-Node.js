let people = `[
    { name: "Ahmed Samir", age: 29, phone: "+201001234567", country: "Egypt" },
    { name: "Lina Youssef", age: 34, phone: "+201228765432", country: "Egypt" },
    { name: "Omar Nabil", age: 22, phone: "+201095678432", country: "Egypt" },
    { name: "Sara Johnson", age: 27, phone: "+14155552671", country: "USA" },
    { name: "Carlos Mendez", age: 31, phone: "+5215512349876", country: "Mexico" },
    { name: "Emma Brown", age: 25, phone: "+447911123456", country: "UK" },
    { name: "Hiroshi Tanaka", age: 38, phone: "+819012345678", country: "Japan" },
    { name: "Julia Schmidt", age: 30, phone: "+4915123456789", country: "Germany" },
    { name: "Fatima Al-Zahrani", age: 26, phone: "+971501234567", country: "UAE" },
    { name: "Lucas Rossi", age: 33, phone: "+393491234567", country: "Italy" }
]`;

  // Extract only Egyptian phone numbers
let reg = /\+20\d{10}/g

let numbers = people.match(reg);

if (numbers != null){
    console.log(numbers.join('\n'));
}