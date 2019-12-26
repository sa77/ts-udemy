import  _ from 'lodash';

// `declare` allows us to let TS know of some global variables that TS doesn't inherently
declare var GLOBAL: any;

console.log(_.shuffle([1, 3, 9, 2]))

console.log(GLOBAL);


import { Product } from './product.model';


const p1 = new Product('A book', 12.99);

console.log(p1.getInformation());


// if we get this from the server - this does not have a class used in TS (the `Product` type imported above)
const products = [
    {title: 'A carpet', price: 21.99},
    {title: 'A pen', price: 10.99}
];


// one way to do it will be - manually transfrom these into an instance of specific constructor function
const loadedProducts = products.map(prod => {
    return new Product(prod.title, prod.price);
})

for (const prod of loadedProducts) {
    console.log(prod.getInformation())
}


// another way is to use class-transformer (TS - module [3rd party])

// TS - module - https://github.com/typestack/class-transformer
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';

const loadedProductsTransformed = plainToClass(Product, products);

console.log('TS - class-transformer');
for (const prod of loadedProductsTransformed) {
    console.log(prod.getInformation())
}


// https://github.com/typestack/class-validator
//  - allows to add validations rules with the help of some decorators inside of a class
import { validate } from 'class-validator';
const newProd = new Product('', -5.99)

validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log('Validation Error -', errors)
    } else {
        console.log(newProd.getInformation())
    }
});




