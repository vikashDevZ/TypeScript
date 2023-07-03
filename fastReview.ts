// function getArray<T>(items: T[]):T[] {
//     return new Array<T>().concat(items);
// }
// let myNums= getArray([1,2,"4"]);
// myNums.push("sdf")
// console.log('myNums', myNums)

// function getInfo<T, U>(id: T, name: U): string {
//     console.log('id, name', id, name)
//     return "" + id;
// }

// getInfo(2, "vik");

// class Customer{
//     fname:string;
//     lname:string;

//     constructor(fname: string, lname:string){
//         this.fname=fname;
//         this.lname=lname;
//     }    
// }

// function customerLogger<T extends Customer>(customer: T) : void {
//     console.log(`${customer.fname}, ${customer.lname}`)
// }

// let customer = new Customer('vik','pate')

// customerLogger(customer);



// interface Pair<T, U> {
//     name: T
//     age(): U
// }


// let p: Pair<string, void> = { name: "vik", age: () => console.log("hello") };
// console.log('p', p)


interface ElementChecker {
    <T>(items: T[], toBeChecked: T, atIndex: number): boolean;
}
