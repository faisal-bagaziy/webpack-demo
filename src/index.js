import _ from 'lodash';
import myName from './myName';

function component(){
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // lgnore above Lodash is now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], '');
    return element;
}

function nameComponent(){
    const nameElement = document.createElement('div');
    
    nameElement.innerHTML = myName("Faisal");

    return nameElement;
}

document.body.appendChild(component());
document.body.appendChild(nameComponent());
