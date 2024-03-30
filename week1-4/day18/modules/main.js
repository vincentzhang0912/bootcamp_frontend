// import greetings from "./defaultmod.js";

// greetings();


import {olagreet,namestrgreet} from "./namedmod.js";//destructuring

import { SECRET_KEY } from "./namedmod.js";

olagreet();
namestrgreet();
let printKey=()=>{
    console.log(SECRET_KEY)
}
printKey();