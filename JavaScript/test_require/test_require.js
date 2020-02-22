// const hello = require('./hello');

// hello.h1();
// hello.h2();
// hello.h3();

// const {
//     h1,
//     h2,
//     h3
// } = require('./hello');

// h1();
// h2();
// h3();

// const {
//     h3,
//     h2,
//     h1
// } = require('./hello');

// h1();
// h2();
// h3();

// import * as hello from './hello';

// hello.h1();
// hello.h2();
// hello.h3();

import Mod1 from './mod-1.mjs';
import Mod2 from './mod-2.mjs';

console.log(`Mod1.num = ${Mod1.num}`)
Mod1.increase();
console.log(`Mod1.num = ${Mod1.num}`)
Mod2.increase();
console.log(`Mod1.num = ${Mod1.num}`)