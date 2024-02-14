import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";


const numbersCollection = new NumbersCollection([1, 234, 54, -5, 23, 8]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
