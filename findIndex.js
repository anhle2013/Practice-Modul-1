function findIndex (number, array) {
    for (let i=0; i< array.length; i++) {
        if (array[i]==number) return i;
        else return -1;
    }
}
let a=[1,2,3,4,5,6,7];
console.log(findIndex(10,a));