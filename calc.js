// function test () {
//
// debugger;

var input = [];
var nextOperation = '';
var temp = 0;
var answer = 0;

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



$('#1').click(function () {
  input.push(1);
  $('#answer').text(Number(input.join('')));
})

$('#2').click(function () {
  input.push(2);
  $('#answer').text(Number(input.join('')));
})

$('#3').click(function () {
  input.push(3);
  $('#answer').text(Number(input.join('')));
})

$('#4').click(function () {
  input.push(4);
  $('#answer').text(Number(input.join('')));
})

$('#5').click(function () {
  input.push(5);
  $('#answer').text(Number(input.join('')));
})

$('#6').click(function () {
  input.push(6);
  $('#answer').text(Number(input.join('')));
})

$('#7').click(function () {
  input.push(7);
  $('#answer').text(Number(input.join('')));
})

$('#8').click(function () {
  input.push(8);
  $('#answer').text(Number(input.join('')));
})

$('#9').click(function () {
  input.push(9);
  $('#answer').text(Number(input.join('')));
})

$('#0').click(function () {
  input.push(0);
  $('#answer').text(Number(input.join('')));
})

$('#plus').click(function () {
  if (nextOperation !== '=') {
    temp = Number(input.join(''));
    operate();
  }
  input = [];
  nextOperation = '+';
  $('#temp').text(answer);
  $('#answer').text('0');
  $('#operator').text('+');
})

$('#multiply').click(function () {
  if (nextOperation !== '=') {
    temp = Number(input.join(''));
    operate();
  }
  input = [];
  nextOperation = '*';
  $('#temp').text(answer);
  $('#answer').text('0');
  $('#operator').text('*');
})

$('#minus').click(function () {
  if (nextOperation !== '=') {
    temp = Number(input.join(''));
    operate();
  }
  input = [];
  nextOperation = '-';
  $('#temp').text(answer);
  $('#answer').text('0');
  $('#operator').text('-');
})

$('#divide').click(function () {
  if (nextOperation !== '=') {
    temp = Number(input.join(''));
    operate();
  }
  input = [];
  nextOperation = '/';
  $('#temp').text(answer);
  $('#answer').text('0');
  $('#operator').text('/');
})

$('#equal').click(function () {
  if (nextOperation === '+') answer += Number(input.join(''));
  if (nextOperation === '*') answer *= Number(input.join(''));
  if (nextOperation === '-') answer -= Number(input.join(''));
  if (nextOperation === '/') answer /= Number(input.join(''));
  $('#answer').text(answer);
  $('#operator').text('=');
  $('#temp').text('');
  temp = answer;
  nextOperation = '=';
})

$('#clear').click(function () {
  answer = 0;
  temp = 0;
  nextOperation = '';
  input = [];
  $('#answer').text(0);
  $('#temp').text(0);
  $('#operator').text('');
})

// }
