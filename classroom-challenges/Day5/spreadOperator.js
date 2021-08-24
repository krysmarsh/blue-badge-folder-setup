/* 
    -Spread  Operator

        -The spread operator pulls out all elements in an array and give them back to you as a standalone list of elememts
        -It takes in an iterable object and/or object and expands it into individual elements. The spread operator is typically used to make copies of other array/objects
        -Denote by the ellipsis(...)
        */

        let students = ["Laura", "Krystle"];
       // ...students; //["Laura", "Krystle"];

      // let copiedStudents = [...students];
      //let the spread operator is good at making a new copy of that array

      let copiedStudents = [students];
      students.push("Leslie");
       console.log(students, copiedStudents);

       //math

       console.log(Math.min(1,5,-3));
       let prices = [10.99, 5.99, 3.99, 6.99];
       console.log(Math.min(prices)); //NaN not a number
       console.log(Math.min(...prices)); //pulls out individual elements (the numbers in this case) and returns standalone elements.

       //concatenates arrays
       let num1 = [1,2,3,4];
       let num2 = [5,6,7,8];

       let concat = [...num1, ...num2];
       console.log(concat);
       //concat is [1,2,3,4,5,6,7,8];

      let sentence = ["Oh hi Mark", false, 2];

       function pass(a, b, c) {
           console.log(a); 
           console.log(b);
           console.log(c);
       }
       pass(...sentence);

       //copy an object
       let obj = {a:1, b:2, c:3};
       let copyObj = {...obj};

       console.log(obj, copyObj);

       //merge object
       let obj1 = {a: 1, b: 2, c: 3}
       let obj2 = {d: 4, e: 5, f: 6}

       let mergeObj = {...obj1, ...obj2};
       console.log(mergeObj);
       //merge is {a:1, b:2, c:3, d:4, e:5, f: 6}

       //NOTE
       let obj1 = {a: "hello", b: "Mark", c: "!"};
       let obj2 = {a: "Goodbye"};

       let mergeObj = {...obj1, ...obj2};
       console.log(mergeObj, obj1);

       //error
       let obj = {a:1, b: 2, c: 3};
       //let copyObj = [...obj];

       copyObj = [obj];

       console.log(copyObj);