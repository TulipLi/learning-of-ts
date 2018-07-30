function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);

function greeter2(person: string) {
    return "Hello, " + person;
}

let user2 = [0, 1, 2];

document.body.innerHTML = greeter2(user2);

//greeter.ts:15:36 - error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.