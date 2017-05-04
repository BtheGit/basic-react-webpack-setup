import component from './component';
import './main.css';
import img from './media/picture.jpg';


const container = document.getElementById('test')

container.appendChild(component());
container.appendChild(component('Hot Module Reloading'));
container.appendChild(component('Using dev/prod configs in webpack'));
const x =document.createElement('img')
x.src = img;
document.body.appendChild(x)

let f = {key: 'value'};

let p = {...f, key2: 'value2'}

console.log(p)