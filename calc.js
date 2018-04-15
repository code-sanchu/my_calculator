
var input = [0];//start with zero to avoid decimal point errors
var nextOperation = '';
var temp = 0;
var answer = 0;
var flag = false; //for changing operator functionality
var flagEqual = false; //to allow clear when putting number after equal

function reset() {
  input = [0];
  temp = 0;
  answer = 0;
  nextOperation = '';
  $('#temp').text(0);
  $('#operator').text('');
}

function equalOpClear() {
  $('#error').text('');
  if (flagEqual) {
    reset();
    flagEqual = false;
  }
}

function numGeneric(num) {
  equalOpClear();//if this number pressed after equals op, reset everything
  if (input.length < 9) {
    input.push(num);
    $('#answer').text(Number(input.join('')));
    flag = true;
  } else {
    $('#error').text('Max digits');
  }
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
  if (flag) { //i.e. was a number inputted last
    if (nextOperation !== '=') {
      temp = Number(input.join(''));
      operate();
    }
    input = [0];
    if (answer.toPrecision(8).length > 10 ) {
      reset();
      $('#answer').text(0);
      $('#error').text('Digit Length Err');
    } else {
      $('#temp').text(Number(answer.toPrecision(8)));
      $('#answer').text('0');
    }
  }
  nextOperation = op;
  $('#operator').text(op);
  flag = false;
  flagEqual = false;
}

$('#1').click(function () {
  numGeneric(1);
})

$('#2').click(function () {
  numGeneric(2);
})

$('#3').click(function () {
  numGeneric(3);
})

$('#4').click(function () {
  numGeneric(4);
})

$('#5').click(function () {
 numGeneric(5);
})

$('#6').click(function () {
  numGeneric(6);
})

$('#7').click(function () {
  numGeneric(7);
})

$('#8').click(function () {
  numGeneric(8);
})

$('#9').click(function () {
  numGeneric(9);
})

$('#0').click(function () {
 numGeneric(0);
})

$('#point').click(function () {
 numGeneric('.');
})

$('#plus').click(function () {
  operatorGeneric('+');
})

$('#multiply').click(function () {
  operatorGeneric('*');
})

$('#minus').click(function () {
  operatorGeneric('-');
})

$('#divide').click(function () {
  operatorGeneric('/');
})

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
    flagEqual = true;
  }
})

$('#clear').click(function () {
  reset();
  $('#answer').text(0);
  $('#error').text('');
})

$('#delete').click(function () {
  input.pop();
  $('#answer').text(Number(input.join('')));
  $('#error').text('');
})
