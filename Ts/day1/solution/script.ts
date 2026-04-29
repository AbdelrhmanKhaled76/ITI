// task 1
interface User {
    name : string,
    age : number
};

const obj: Pick<User, 'name'> = {
    name: "abdelrhman"
};



// task 2
interface Profile {
    username ?: string,
    email ?: string
};

const obj2 : Required<Profile> = {
    username : "abdelrhman",
    email : "fake@Email.com"
};


// task 3
const colors : Record<"red"|"green"|"blue", string> = {
    "red" : "#FF0000",
    "green" : "#00FF00",
    "blue" : "#0000FF"
};
console.log(colors.blue);


// task 4
interface Person {
    name : string,
    age : number,
    email : string
}

type TypePerson = Pick<Person, "name"|"email">; 

const obj3 : TypePerson = {
    email : "fake@email.com",
    name : "abdelrhman"
};

console.log(obj3);

// task 5
type TypePerson2 = Omit<Person, "age">;

const obj4 : TypePerson2 = {
    email : "fake@email.com",
    name : "abdelrhman"
};

console.log(obj4);



// task 6
type colorsType = "red" | "green" | "blue" | "yellow";

type ColorsCpy = Exclude<colorsType, "yellow">;

const color : ColorsCpy = "blue";


// task 7
type ColorCopy2 = Extract<colorsType, "red"|"blue">;

const color2 : ColorCopy2 = "blue";



// task 8
type MaybeString = string | null | undefined;

type DefinitelyString = NonNullable<MaybeString>;

const myVal :DefinitelyString = undefined;
