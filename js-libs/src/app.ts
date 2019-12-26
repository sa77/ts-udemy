import  _ from 'lodash';

// `declare` allows us to let TS know of some global variables that TS doesn't inherently
declare var GLOBAL: any;

console.log(_.shuffle([1, 3, 9, 2]))

console.log(GLOBAL);
