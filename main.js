const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const congrats = document.getElementById('congrats');

const formatNum = num => (num < 10 && num > -10 ? `0${num}` : num);

const timer = setInterval(() => {
	let date = new Date();
	let mama = new Date(2024, 9, 25);
	let difference = mama.getTime() - date.getTime();

	if (difference <= 0) {
		clearInterval(timer);
		document.querySelector('.wrapper-row').style.display = 'none';
		congrats.style.display = 'block';
	} else {
		days.textContent = formatNum(Math.floor(difference / 1000 / 60 / 60 / 24));
		hours.textContent = formatNum(Math.floor((difference / 1000 / 60 / 60) % 24));
		minutes.textContent = formatNum(Math.floor((difference / 1000 / 60) % 60));
		seconds.textContent = formatNum(Math.floor((difference / 1000) % 60));
	}
}, 1000)
