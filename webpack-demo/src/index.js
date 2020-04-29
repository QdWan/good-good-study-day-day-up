import _ from 'lodash'
import './style.css'
import spiderman from './spiderman.jpg'

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  // 将图像添加到我们现有的 div。
  var img = new Image();
  img.src = spiderman;

  element.appendChild(img);

  return element;
}

document.body.appendChild(component());
