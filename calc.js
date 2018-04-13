
var input = [0];//start with zero to avoid decimal point errors
var nextOperation = '';
var temp = 0;
var answer = 0;
var flag = false; //for changing operator functionality
var flagEqual = false; //to allow clear when putting number after equal

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

function equalOpClear() {
  if (flagEqual) {
    input = [0];
    temp = 0;
    answer = 0;
    nextOperation = '';
    $('#temp').text(0);
    $('#operator').text('');
    flagEqual = false;
  }
}

function numGeneric(num) {
  equalOpClear();
  if (input.length < 9) {
    input.push(num);
    $('#answer').text(Number(input.join('')));
    flag = true;
  } else {
    $('#error').text('Max digits');
  }
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
  if (flag) {
    if (nextOperation !== '=') {
      temp = Number(input.join(''));
      operate();
    }
    input = [0];
    $('#temp').text(answer.toPrecision(8));
    $('#answer').text('0');
  }
  nextOperation = '+';
  $('#operator').text('+');
  flag = false;
  flagEqual = false;
})

$('#multiply').click(function () {
  if (flag) {
    if (nextOperation !== '=') {
      temp = Number(input.join(''));
      operate();
    }
    input = [0];
    if (answer > 99999999) {
      answer = 0;
      temp = 0;
      nextOperation = '';
      input = [0];
      $('#answer').text(0);
      $('#temp').text(0);
      $('#operator').text('');
      $('#error').text('Max Digit Length Exceeded ');
    }
    $('#temp').text(answer.toPrecision(8));
    $('#answer').text('0');
  }
  nextOperation = '*';
  $('#operator').text('*');
  flag = false;
  flagEqual = false;
})

$('#minus').click(function () {
  if (flag) {
    if (nextOperation !== '=') {
      temp = Number(input.join(''));
      operate();
    }
    input = [0];
    $('#temp').text(answer.toPrecision(8));
    $('#answer').text('0');
  }
  nextOperation = '-';
  $('#operator').text('-');
  flag = false;
  flagEqual = false;
})

$('#divide').click(function () {
  if (flag) {
    if (nextOperation !== '=') {
      temp = Number(input.join(''));
      operate();
    }
    input = [0];
    $('#temp').text(answer.toPrecision(8));
    $('#answer').text('0');
  }
  nextOperation = '/';
  $('#operator').text('/');
  flag = false;
  flagEqual = false;
})

$('#equal').click(function () {
  if (nextOperation === '+') answer += Number(input.join(''));
  if (nextOperation === '*') answer *= Number(input.join(''));
  if (nextOperation === '-') answer -= Number(input.join(''));
  if (nextOperation === '/') answer /= Number(input.join(''));
  $('#answer').text(answer.toPrecision(8));
  $('#operator').text('=');
  $('#temp').text('');
  temp = answer;
  nextOperation = '=';
  flagEqual = true;
})

$('#clear').click(function () {
  answer = 0;
  temp = 0;
  nextOperation = '';
  input = [0];
  $('#answer').text(0);
  $('#temp').text(0);
  $('#operator').text('');
  $('#error').text('');
})

$('#delete').click(function () {
  input.pop();
  $('#answer').text(Number(input.join('')));
  $('#error').text('');
})
