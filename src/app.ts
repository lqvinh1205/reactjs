export {}
function sum(numberA: number, numberB: number) {
    return numberA + numberB;
}
console.log(sum(30, 10))
type Products = {
    id: number,
    name: string,
    price: number
} 
type Products2 = {
    id: number,
    name: string,
    status: boolean
} 
type MergeProducts = Products | Products2
const myName: string | number = "Le Quang Vinh";
const myAge: number = 20;
const myStatus: boolean = true;
const myObj: Products = {id: 1, name: "Vinh", price: 10}
const arrNumber: number[] = [1,2,3,4,5];
const arrString: string[] = ["a", "b", "c"];
const arrObj: MergeProducts[] = [
    {id:1, name: "san pham 1", price: 99},
    {id:1, name: "san pham 1", status: true},
] 

