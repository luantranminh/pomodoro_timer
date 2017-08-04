pomodoro = 1500;
shortBreak = 300;
longBreak = 600;
count = 0
x = null;

$(document).ready(function() {
  Pomodoro(); stop();
  $('#pomodoro').click(function() { Pomodoro(); });
  $('#shortbreak').click(function() { ShortBreak(); });
  $('#longbreak').click(function() { LongBreak(); });
});



function Pomodoro() {
  reset(pomodoro);
  start(pomodoro);
  $('#startbut').click(function() { start(pomodoro); });
  $('#stopbut').click(function() { stop(); });
  $('#resetbut').click(function() { reset(pomodoro); });
}

function ShortBreak() {
  reset(shortBreak);
  start(shortBreak);
  $('#startbut').click(function() { start(shortBreak); });
  $('#stopbut').click(function() { stop(); });
  $('#resetbut').click(function() { reset(shortBreak); });
}

function LongBreak() {
  reset(longBreak);
  start(longBreak);
  $('#startbut').click(function() { start(longBreak); });
  $('#stopbut').click(function() { stop(); });
  $('#resetbut').click(function() { reset(longBreak); });
}
function start(time) {
  if(x != null) return;
  count = count == 0? time: count;
  x = setInterval(function() {
    count -= 1;
    var minute = pad(Math.floor(count/60), 2)
    var second = pad(count%60, 2)
    $('#time').html(minute + ':' + second);
    if(count <= 0 ) {
      clearInterval(x)
    }
  }, 1000);
}

function stop() {
  clearInterval(x);
  x = null;
}

function reset(time) {
  stop();
  count = time;
  x = null;
  var minute = pad(Math.floor(count/60), 2)
  var second = pad(count%60, 2)
  $('#time').html(minute + ':' + second);
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
