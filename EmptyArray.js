/* How to make empty an array*/
//1 Popping its elements
let arr = [1, 2, 3, 4];
while (arr.length > 0) {
    arr.pop();
}

//2. Assigning empty array
let sector = [55, 23, 2909, 1211];
sector = [];

//3. Assigning array's length to zero
let stakeHolders = [1, ": ex-holder", 5, 62, 3];
stakeHolders.length;

//4. Splicing
let sectionRate = [2, 1.1, 44.3, 5];
sectionRate.splice(0, sectionRate.length);

console.log(arr);
console.log(sector);console.log(stakeHolders);console.log(sectionRate);