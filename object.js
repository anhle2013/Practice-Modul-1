class Staff {
    constructor (fullname, email) {
        this.fullname = fullname;
        this.email = email;
    }
    setFullname(fullname) {
        return this.fullname = fullname;
    }
    getFullname() {
        return this.fullname;
    }
    setEmail(email) {
        return this.email = email;
    }
    getEmail() {
        return this.email;
    }
    toString() {
        return `Staff name ${this.fullname} with email: ${this.email}`
    }
}
let david = new Staff ('David', 'david@gmail.com');
david.setFullname('David Do');
david.setEmail('david.do@gmail.com');
console.log(david.toString());

let Staffs = [
    david,
    new Staff ('John Nguyen', 'JohnNguyen@gmail.com'),
    new Staff ('Jeff Buck', 'JeffBuck@gmail.com'),
];
for (let i=0; i<Staffs.length; i++) {
    console.log(Staffs[i].toString());
}