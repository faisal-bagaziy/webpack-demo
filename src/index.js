import _ from 'lodash';
import myName from './myName';

function component(){
    const element = document.createElement('div');
    const elementName = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // lgnore above Lodash is now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], '');
    elementName.innerHTML = myName('Faisal');
    return element;
}

document.body.appendChild(component())
