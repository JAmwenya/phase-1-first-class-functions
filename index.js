function receivesAFunction(callback){
    console.log(callback());
}
function callback(){
    return "I am a callback function";
}
receivesAFunction(callback);

function returnsANamedFunction(){
    return function namedFunction(){
        return "I am a named function";
    }
}
console.log(returnsANamedFunction()());

function returnsAnAnonymousFunction(){
    return function(){
        return
    }
}