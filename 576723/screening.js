// 1: how could you rewrite the following to make it shorter?
if (foo) {
  bar.doSomething(el);
} else {
  bar.doSomethingElse(el);
}

// I'm not really sure. I think you can use : as a sort of "or" statement

// 2: what is the faulty logic in the following code?
var foo = 'hello';

(function() {
  var foo = foo || 'world';
  console.log(foo);
})();

// the foo inside the function doesn't reference the global foo


// 3: given the following code, how would you override the value of the bar
// property for the variable foo without affecting the value of the bar
// property for the variable bim? how would you affect the value of the bar
// property for both foo and bim? how would you add a method to foo and bim to
// console.log the value of each object's bar property? how would you tell if
// the object's bar property had been overridden for the particular object?
var Thinger = function() {
  return this;
};

Thinger.prototype = {
  bar : 'baz'
};

var foo = new Thinger(),
    bim = new Thinger();

// 1) Override the value of the bar property for the variable foo, don't mess up bim
//    foo.bar = "override";
// 2) Alter the value of the bar property for foo AND bim
//    Thinger.prototype.bar = "override";
// 3) Add a method to foo and bim to console.log the value of their bar properties.
//    Add a function somewhere?
// 4) How do you know if Thinger's bar property has been overridden?
//    Call Thinger.prototype.bar and see what it returns?


// 4: given the following code, and assuming that each defined object has a
// 'destroy' method, how would you destroy all of the objects contained in the
// myObjects object?
var myObjects = {
  thinger : new myApp.Thinger(),
  gizmo : new myApp.Gizmo(),
  widget : new myApp.Widget()
};

// Is there some sort of .destroy method like in Rails? Because if so,
// that would be very helpful


// 5: given the following array, create an array that contains the contents of
// each array item repeated three times, with a space between each item. so,
// for example, if an array item is 'foo' then the new array should contain an
// array item 'foo foo foo'. (you can assume the library of your choice is
// available)
var myArray = [ 'foo', 'bar', 'baz' ];

// var fooArray = myArray[0] * 3;
// console.log(fooArray);
// 
// var barArray = myArray[1] * 3;
// console.log(barArray);
// 
// var bazArray = myArray[2] * 3;
// console.log(bazArray);
// 
// These would each return NaN because the strings aren't numeric
// Wondering if a better approach would be to write a loop for it
// that iterated over each item in the array and printed it 3x


// 6: how could you improve the following code?
$(document).ready(function() {
  $('.foo #bar').css('color', 'red');
  $('.foo #bar').css('border', '1px solid blue');
  $('.foo #bar').text('new text!');
  $('.foo #bar').click(function() {
    $(this).attr('title', 'new title');
    $(this).width('100px');
  });
  
  $('.foo #bar').click();
});

// finally, one I can do!
// $(document).ready(function() {
//   $('.foo #bar').css({'color':'red','border': '1px solid blue'}).text('new text!').on('click', function () {
//     $(this).attr('title', 'new tile').width('100px');
//   });
// });



// 7: what issues do you see with the following code? how would you fix it?
(function() {
  var foo;

  dojo.xhrGet({
    url : 'foo.php',
    load : function(resp) {
      foo = resp.foo;
    }
  });

  if (foo) {
    // run this important code
  }
})();

// is foo always going to exist/be defined inside .xhrGet?


// 8: how could you rewrite the following code to make it shorter?
(function(d, $){
  $('li.foo a').attr('title', 'i am foo');
  $('li.bar a').attr('title', 'i am bar');
  $('li.baz a').attr('title', 'i am baz');
  $('li.bop a').attr('title', 'i am bop');
})(dojo, dojo.query);

// loop over it. 
// define each 'thing' (i.e. - foo, bar, baz, bop are things)
// when li has a length, loop over each one
// add a + title + 'i am' + thing


// 9: how would you improve the following code?
for (i = 0; i <= 100; i++) {
  $('#thinger').append('<p><span class="thinger">i am thinger ' + i + '</span></p>');
  $('#gizmo').append('<p><span class="gizmo">i am gizmo ' + i + '</span></p>');
}

// $('#thinger').each()


// 10: a user enters their desired tip into a text box; the baseTotal, tax,
// and fee values are provided by the application. what are some potential
// issues with the following function for calculating the total?
function calculateTotal(baseTotal, tip, tax, fee) {
  return baseTotal + tip + tax + fee;
}

// do we need some sort of validation on the number the person enters as the tip?


// 11: given the following data structure, write code that returns an array 
// containing the name of each item, followed by a comma-separated list of
// the item's extras, if it has any. e.g. 
//
//    [ "Salad (Chicken, Steak, Shrimp)", ... ]
//
// (you can assume the library of your choice is available)
var menuItems = [
  {
    id : 1,
    name : 'Salad',
    extras : [
      'Chicken', 'Steak', 'Shrimp'
    ]
  },
  
  {
    id : 2,
    name : 'Potato',
    extras : [
      'Bacon', 'Sour Cream', 'Shrimp'
    ]
  },
  
  {
    id : 3,
    name : 'Sandwich',
    extras : [
      'Turkey', 'Bacon'
    ]
  },
  
  {
    id : 4,
    name : 'Bread'
  }
];

// can you iterate over the menuItems, extract each by it's index 
// push that into an array and then join all the arrays?


// BONUS: write code such that the following alerts "Hello World"
say('Hello')('World');

// function say() {
//   helloWorld = "Hello World";
//   alert(helloWorld);
// }

// say();


// BONUS: what is the faulty logic in the following code? how would you fix it?
var date = new Date(),
    day = date.getDate(),
    month = date.getMonth(),
    dates = [];
    
for (var i = 0; i <= 5; i++) {
  dates.push(month + '/' + (day + i));
}

console.log('The next five days are ', dates.join(', '));



/*
          DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
                   Version 2, December 2004 

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

Everyone is permitted to copy and distribute verbatim or modified 
copies of this license document, and changing it is allowed as long 
as the name is changed. 

           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

 0. You just DO WHAT THE FUCK YOU WANT TO.
*/
