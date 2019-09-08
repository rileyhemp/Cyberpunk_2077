let spacer = document.querySelector('.platform-spacer')

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    resizeSpacer()
});

function resizeSpacer() {
	spacer.style.width = window.innerWidth - spacer.getBoundingClientRect().x - 415 + 'px'
}

resizeSpacer()