const { Observable } = require("rxjs");
const { map } = require("rxjs/operators");

const users = {
  data: [
    { status: "inactive", age: 14 },
    { status: "inactive", age: 17 },
    { status: "inactive", age: 32 },
    { status: "active", age: 12 },
    { status: "active", age: 25 },
    { status: "inactive", age: 43 },
    { status: "active", age: 25 },
  ],
};

const observable = new Observable((subscriber) => {
  subscriber.next(users);
}).pipe();

const observer = {
  next: (value) => {
    console.log("observer got a value of " + value);
  },
  error: (err) => {
    console.log("Observer got an error of " + err);
  },
  complete: () => {
    console.log("Observer goa a complete notification ");
  },
};

observable.subscribe(observer);
