function varBlock() {
    /**
     * Var is function scoped and can be accessed outside the block that is defined in.
     */
    {
        var x = 5;
    }
    console.log(x); // 5
}

function varReassign() {
    /**
     * var variables can be reassigned
     */
    var x = 5;
    console.log(x); //5
    x = 1;
    console.log(x); //1
}

function varRedeclaration() {
    /**
     * var variables can be rassigned again i.e
     * var x=1;
     * var x=2; //unlike let keyword this will work fine
     */
    var x = 5;
    console.log(x); // 5
    var x = 1;
    console.log(x) //1 No Errors
}

function varTemporalDeadZone() {
    console.log(x); //Will print undefined, var variables can be accessed before they are defined
    var x = 5;
}

/**
 * let
 */

function letBlock() {
    {
        let x = 5;
    }
    console.log(x); // undefined
}

function letReassign() {
    /**
     * let variables can be reassigned
     */
    let x = 5;
    console.log(x); //5
    x = 1;
    console.log(x); //1
}

function letRedeclaration() {
    let x = 5;
    console.log(x); // 5
    let x = 1; //SyntaxError: redeclaration of let x
    console.log(x)
}

function letTemporalDeadZone() {
    console.log(x); //ReferenceError: can't access lexical declaration `x' before initialization
    let x = 5;
}
/**
 * Const example
 */
function constExample() {
    const x = 5;
    x = 2;
    // TypeError: invalid assignment to
    // const `x'
}
