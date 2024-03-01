let autoWriteText = document.querySelector('.auto-write-text-script');
window.addEventListener('DOMContentLoaded', e => {
	autoWriteTextAnimation();
	cursorAnimation();
});

const autoWriteTextAnimation = () => {
	let textAutoHide = autoWriteText.innerHTML.length;
	let textAutoWrite = 0;
	let splitFormatText = autoWriteText.innerHTML.split('');
	function autoWrite() {
		let splitFormatTextHide = splitFormatText.slice(
			'',
			splitFormatText || splitFormatText.length === 0
				? (textAutoWrite += 1)
				: (textAutoHide -= 1)
		);
		let result = splitFormatTextHide.slice('');
		autoWriteText.innerHTML = result.slice('').join('');
		let span = document.createElement('span');
		autoWriteText.append(span);
		const timeOutLength = 100;
		const timeOut = setTimeout(() => {
			span.innerHTML = 'and Android Development';
		}, timeOutLength);

		if (timeOutLength === 101) {
			clearTimeout(timeOut);
		}

		if (textAutoWrite === textAutoHide) {
			clearTime();
		}
	}
	const interval = setInterval(() => {
		autoWrite();
	}, 100);

	function clearTime() {
		clearInterval(interval);
	}
};

const cursorAnimation = () => {
	let cursorElement = document.querySelector('.cursor');
	document.body.addEventListener('mousemove', e => {
		cursorElement.style.opacity = '1';
		const X = e.pageX - 25;
		const Y = e.pageY - 25;
		cursorElement.animate(
			{ left: `${X}px`, top: `${Y}px` },
			{ duration: 100, fill: 'both' }
		);
	});
};

document.querySelector('.container').addEventListener('resize', e => {
	e.initUIEvent();
	console.log(e);
});
