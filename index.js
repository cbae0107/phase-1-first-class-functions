function receivesAFunction(name){
    name();
}
function returnsANamedFunction(){
    return function named(){
        console.log("John Doe.")
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log();
    } 
}