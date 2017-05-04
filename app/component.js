export default (text = 'No Data provided to component') => {
	const element = document.createElement('div');
	element.innerHTML = text;
	return element;
}