const { Observable } = require("rxjs");
const { map, pluck, filter } = require("rxjs/operators");

const users = {
  data: [
    { status: "inactive", age: 14 },
    { status: "inactive", age: 17 },
    { status: "active", age: 35 },
    { status: "active", age: 32 },
    { status: "active", age: 33 },
    { status: "inactive", age: 43 },
    { status: "active", age: 20 },
  ],
};

const users2 = {
  data: [
    { status: "inactive", age: 18 },
    { status: "inactive", age: 17 },
    { status: "active", age: 32 },
  ],
};

const observable = new Observable((subscriber) => {
  subscriber.next(users);
  subscriber.next(users2);
}).pipe(
  pluck("data"),
  filter((value) => value.length >= 5),
  map((value) => {
    // console.log("2) Got data from first operator", value);
    return value.filter((user) => user.status === "active");
  }),
  map((value) => {
    // console.log("3) Got data from seconde operator", value);
    return value.reduce((sum, user) => sum + user.age, 0) / value.length;
  }),
  map((value) => {
    // console.log("4) Got data from third operator", value);
    if (value < 18) throw new Error("Evarage age is too young");
    else return value;
  })
);

const observer = {
  next: (value) => {
    console.log("observer got a value of " + value);
  },
  error: (err) => {
    console.log("Observer got an error of " + err);
  },
  complete: () => {
    console.log("Observer got a complete notification ");
  },
};

observable.subscribe(observer);
