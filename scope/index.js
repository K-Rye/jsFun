const scope = {
  exerciseA() {
    let personA = 'Paul'
    let personB = 'Ben'
    let personC = 'Tom'

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = [
      {'A': 'Ben'},
      {'B': 'CardiB'},
      {'C': 'CardiB'},
      {'D': 'Paul'}

    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
    //On line 3 we declare the variable personA and set its' value to Paul then on line 4 we declare the variable personB and set its' value to Ben. On line 5 we declare the variable personC setting its' value to Tom. On line 7 the function changePerson is declared but not invoked which moves us down to line 28 where we invoke the changePerson function bringing us back up to line 8 where we enter the if block that checks to see if the value of the personA variable is Paul. Since personA is globally scoped, javascript moves up the scope chain to check the value of personA which is Paul. We move to the next line where 'person' is being assigned to cardiB. Javascript looks to re-assign person since a keyword is not being used to assign it. It looks up the scope chain for a person assignment but does not find one so assigns person to the value of CardiB. Moving to line 10 the beautifyPerson function is invoked which takes us to line 13 and console.log A. Javascript looks up the scope chain for personBs' value    
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number

      function newNumber() {
        number = 64;

        // Log B: number
      }

      newNumber();

      // Log C: number
    }

    numberFunction();

    // Log D: number

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
      }

      newPhrase();

      // Log C: greeting
    }

    greetingFunction();

    // Log D: greeting

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
      }

      newGreeting();

      // Log C: greeting
    }

    greetingGenerator();

    // Log D: greeting

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name
      }

      // Log B: name
    }

    // Log C: name

    sayName();

    // Log D: name

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog

        dog = 'Biscuit';

        // Log C: dog

      }

      rollOver();

      // Log D: dog
    }

    petDog();

    // Log E: dog

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          const fruit = 'strawberry';
        }

        // Log B: fruit
      }

      // Log C: fruit
    }

    eatFruit()

    // Log D: fruit

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num

      if (num < 5) {
        const num = 9;

        fn2(num)

        const newNum = num;

        // Log B: newNum
      }

      newNum = num;

      // Log C: newNum
    }

    const fn2 = function(num){
      // Log D: num

      num = num + 1;

      // Log E: num
    }

    fn1();

    const result = [
      {'A': 4},
      {'D': 9},
      {'E': 10},
      {'B': 9},
      {'C': 4}
      ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // On the first line we are declaring the variable num and setting its' value to 6. Then we declare the fn1 function but do not invoke it. We then move down and declare the fn2 function but again do not invoke it. Again, moving down we invoke the fn1 function which puts us in the function where we declare a functionally scoped variable num and set its' value to 4. Log A console logs 4 becuase it is with in the scope of the function. Then we move into an if block where we check to see if num is less than 5 and if it is we will declare a block scoped variable of num and set its' value to 9. The next line invokes the fn2 function and pases in the argument of num which takes us into the fn2 function. Log D will log 9 because the value of num passed into the invocation of fn2 is num which has the value of 9 within that block scope. The next line re-assigns num to num +1. As a result Log E will log 10 because it is taking the value of num passed into the argument which is 9 and adding 1. That brings us back up to our fn1 function inside the if block where we left off and are assigning newNum the value of num. Log E will equal 10. We move out of the if block and newNum is now assigned to the value of num. Because we are outside of the if block the value of num being re-assigned to newNum is 4. 
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }

      // Log C: hunger
    };

    eatSnack();

    hunger += 5;
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result =[
      {'A': 75},
      {'B': 0},
      {'C': 75},
      {'D': 80},
      {'E': 55}
      ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
    //Exercise I starts with the global assignment of the variable hunger to the value of 100. The function eatSnack is then declared but not invoked. After the function eatSnack is then invoked which brings us back up to the function where hunger is globally re-assigned to the value of 75 (Log A). gorgeYourself is then invoked which brings us to the function where hunger is functionally assigned the value of 0 (Log B). We leave the fiunction and encounter Log C which has the value of 75 because it looks up the scope chain to the global assignment of hunger. We leave the function where hunger is re-assigned to 80 by adding 5 (Log D:). eatSnack is invoked again subtracting 25 from our global assignment of hunger which re-assigns it the value of 55 (Log E) 
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';
   // Assgining the variable sandwich globally to the value of ketchup sandwich
   // Log A: sandwich = ketchup sandwich


    const addChipotle = () => {
      //adChipotle is being declared but not invoked move to addCheese
      // Log B: toppings
      // Log B is undefined because toppings variable name is hoisted but value is not
      var toppings = 'chipotle sauce';
      //toppings is funcitonally assigned to chipotle sauce-move to if block

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }
      // the if statement checks to see if the value of toppings is chipotle sauce, which it is, so then moves to the next line where sandwich is re-assigned the value of not a mediocre sandwich

      // Log C: sandwich
      //Log C is not a mediocre sandwich move to Log E
    }

    const addCheese = () => {
      //addCheese is being declared but not invoked, move to cheeseTopping variable assignment
      let cheeseTopping = 'gouda';
      // cheeseTopping is being functionally assigned to the value of gouda move to log D
      // Log D: cheeseTopping
      //Log D is gouda move to shesTheManReference
      const shesTheManReference = () => {
        // shesTheManReference is declared but not invoked move to shesTheManReference invocation
        amandaBynes = "National Treasure"
        //amandaBynes is being globally assigned to the value of National Teasure-move out of function to addChipotle invocation
      }

      shesTheManReference();
      //shesTheManReference is invoked moving us into the function
    }

    cheeseTopping = 'kraft';
    //cheeseTopping is being assigned globally the value of kraft because it is not preceded by var let or const move to addCheese invocation
    addCheese();
    //addCheese is invoked moving us into the addCheese function

    addChipotle();
    //addChipotle is invoked moving us into the function
    // Log E: sandwich
    //Log E is not a mediocre sandwich-move to Log F 
    // Log F: amandaBynes
    //LogF is National Treasure- and done...

    const result = [
      {'A': 'ketchup sandwich'},
      {'D': 'gouda'},
      {'B': 'undefined'},
      {'C': 'not a mediocre sandwich'},
      {'E': 'not a mediocre sandwich'},
      {'F': 'National Treasure'}
      ];
    return result;

    // Annotation:
    // Write your annotation here as a comment

  },

  exerciseK() {
    let num = 10;

    function foo() {
        if (num > 5) {
           num = 7;
        }
        // Log A: num
    }

    foo();

    // Log B: num

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;
    //

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;
    //global declaratio of num to equal 5

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = [
      {'A': 5},
      {'B': 6},
      {'C': 6},
      {'D': 6}
      ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
    //num is globally
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = [
      {'E': 'Pam'},
      {'A': 'Pam'},
      {'B': 'Pam'},
      {'C': 'Louisa'},
      {'D': 'Louisa'},
      {'F': 'Louisa'},
      ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
    //Instructor is globally assigned to the value of Pam. Function changeInstructor is declared but not invoked, which moves us to Log E which logs Pam. changeInstructor is invoked which moves us into the function to Log A which logs Pam. Moving into the if block we check if instructor = Brittany which it does not so we move to the else statement where instructor is block scope assigned to the value of Brittany. Log B is outside of the block so it logs the global value of Pam. Function rename is declared but not invoked. rename is invoked which brings us into the function. 
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // console.log('Log A:' shoe)
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = [
      {'B': 'flipflop'},
      {'A': 'undefined'},
      {'C': 'flipflop'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment

    // On line 469 we declare a global variable named shoe and assign it equal to flipflop then we declare a global function named putOnShoe but we skip down to line 469 because it hasn't been invoked yet . ON line 469 we log the value of shoe, which is flipflop at this point in time. The we go ahead and invoke our putOnShoe function and when we try to log shoe within our function, we get undefined because our shoe declaration on line 473 is hoisted to the top of that function scope. Once we've finished executing putOnShoe, we go back down to line 478 and log shoe again which will give us flipflop.

  },

  exerciseP() {
    function orderLunch() {
      if (typeof lunch === 'undefined') {
        // Log A: lunch
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
},

module.exports = scope;