
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
