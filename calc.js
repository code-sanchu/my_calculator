
var input = [0];//start with zero to avoid decimal point errors
var nextOperation = '';
var temp = 0;
var answer = 0;
var lastButton;

function reset() {
  input = [0];
  temp = 0;
  answer = 0;
  nextOperation = '';
  $('#temp').text(0);
  $('#operator').text('');
}

function numGeneric(num) {
  $('#error').text('');
  if (lastButton === '=') {
    reset();
  }
  if (input.length < 9) {
    input.push(num);
    $('#answer').text(Number(input.join('')));
  } else {
    $('#error').text('Max digits');
  }
  lastButton = num;
}

function operate() {
  if (nextOperation === '+') {
    answer += temp;
  } else if (nextOperation === '*') {
    answer *= temp;
  } else if (nextOperation === '-') {
    answer -= temp;
  } else if (nextOperation === '/') {
    answer /= temp;
  } else {
    answer = temp;
  }
}

function operatorGeneric(op) {
  $('#error').text('');
  if (typeof lastButton === 'number' || lastButton === '=' || lastButton === '.') {
    if (nextOperation !== '=') {
      temp = Number(input.join(''));
      operate();
    }
    input = [0];
    if (answer.toPrecision(8).length > 10 ) {//>10 to allow for negative numbers
      reset();
      lastButton = undefined;
      $('#answer').text(0);
      $('#error').text('Digit Length Err');
    } else {
      $('#temp').text(Number(answer.toPrecision(8)));
      $('#answer').text('0');
      nextOperation = op;
      $('#operator').text(op);
      lastButton = op;
    }
  }
}

var buttonArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0];

for (let i = 0; i < $('.number').length; i++) {

  $('.number:eq(' + i + ')').click(function () {  
    numGeneric(buttonArr[i]);
  });
  
}

// for (let i = 0; i < 10; i++) {
//   $('#' + i.toString()).click(function () {
//     numGeneric(i);
//   })
// }

var xps = ['+', '-', '*', '/'];

for (let i = 0; i < $('.operator').length; i++) {
  
  $('.operator:eq(' + i + ')').click(function () {    
    operatorGeneric(xps[i]);
  })

}

$('#equal').click(function () {
  $('#error').text('');
  if (nextOperation === '+') answer += Number(input.join(''));
  if (nextOperation === '*') answer *= Number(input.join(''));
  if (nextOperation === '-') answer -= Number(input.join(''));
  if (nextOperation === '/') answer /= Number(input.join(''));
  if (!nextOperation) answer = Number(input.join(''));
  if (answer.toPrecision(8).length > 10 ) {
    reset();
    $('#answer').text(0);
    $('#error').text('Digit Length Err');
  } else {
    $('#answer').text(Number(answer.toPrecision(8)));
    $('#operator').text('=');
    $('#temp').text('');
    temp = answer;
    nextOperation = '=';
    lastButton = '=';
  }
})

$('#clear').click(function () {
  reset();
  lastButton = undefined;
  $('#answer').text(0);
  $('#error').text('');
})

$('#delete').click(function () {
  input.pop();
  $('#answer').text(Number(input.join('')));
  $('#error').text('');
})


//******functionality box**********
var flag = true;

$('#arrow').click(function () {
  if (flag) {
    $('#blurb').slideDown(600, function () {
      $('#arrow').toggleClass('fa-sort-down fa-sort-up');
    });
    flag = false;
  } else {
    $('#blurb').slideUp(400, function () {
      $('#arrow').toggleClass('fa-sort-down fa-sort-up');
    });
    flag = true;
  }

})
