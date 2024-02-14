import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";


const numbersCollection = new NumbersCollection([1, 234, 54, -5, 23, 8]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('HekliNdo!');
const sorter1 = new Sorter(charactersCollection);
sorter1.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-7);
linkedList.add(12);
linkedList.add(80);
const sorter2 = new Sorter(linkedList);
sorter2.sort();
linkedList.print();

