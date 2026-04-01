function greet(name) {
    if(name == null) {  // intentional issue (== instead of ===)
        console.log("Hello stranger");
    } else {
        console.log("Hello " + name);
    }
}

greet();