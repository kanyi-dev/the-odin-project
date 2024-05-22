//Object literal way to define objects

const myObject = {
  property: "Value",
  otherProperty: 77,
  "obnoxious property": () => {
    console.log("Yup, it's me!");
  },
};

let anObject = myObject["obnoxious property"];
anObject();
