function App() {
	function handleClick(txt) {
		console.log(txt);
	}

	return (
		<>
			<h1 onClick={() => handleClick('happy')}>Hello</h1>
		</>
	);
}

export default App;
