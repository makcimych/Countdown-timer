const targetDate = new Date('2024-05-31T21:17:00');

function updateCountdown() {
  const currentTime = new Date();
  const difference = targetDate - currentTime;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  
  if (difference <= 0) {
    clearInterval(interval);
    document.getElementById("timer").innerText = "Вот и музон";
    soundClick ();
  }
}

function soundClick () {
  let audio = new Audio();
  audio.src = 'D:\Study\WEB\Сountdown timer\src\Gio_Pika_MIRAVI_-_Mir_77823165.mp3';
  audio.autoplay = true;
}

const interval = setInterval(updateCountdown, 1000);