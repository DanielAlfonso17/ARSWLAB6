function tick() {
	const element = (
		<div>
			<h1>Reloj:</h1>
			<h2>Son las: {new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	ReactDOM.render(element, document.getElementById('reloj'));
}
setInterval(tick, 1000);