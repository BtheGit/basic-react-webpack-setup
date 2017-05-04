import component from './component';
import './main.css';

document.body.appendChild(component());
document.body.appendChild(component('Hot Module Reloading'));
document.body.appendChild(component('Using dev/prod configs in webpack'));