/*jslint browser: true, plusplus: true */
/*eslint-disable no-console */
/*global window, document */
var useGrid = false;

window.onload = function () {
    'use strict';
    
    if( useGrid ){
        gridHandler();
    }

    var menuButton = document.getElementsByClassName('menu-controls')[0];
    menuButton.addEventListener('click', function(event){
        toggleMenu(event);}, false);
};

function toggleMenu(){
    console.log('menu button clicked');
    var menuPanel = document.getElementsByClassName('menu-panel')[0];
    var menuContent = menuPanel.getElementsByClassName('menu-content')[0];

    if( menuPanel.className.includes('open') ){
        menuPanel.style.height = null;
        menuPanel.className = 'menu-panel';
        menuContent.style.display = 'none';
    }else{
        menuPanel.style.height = '100%';
        menuPanel.className = 'menu-panel open';
        menuContent.style.display = 'block';
    }
    

}

function gridHandler(){
    console.log('hello');
    var body = document.querySelector('body'),
        firstChildOfBody = body.firstElementChild,
        gridLayer = document.createElement('div'),
        gridChoice = 0;

    gridLayer.setAttribute('id', 'column-baseline-grid');

    if (null !== firstChildOfBody) {
       // body.insertBefore(gridLayer, firstChildOfBody);
    } else {
        body.textContent = 'The body element does not have a child element.';
    }

    document.onkeydown = function (evnt) {
        if (27 === evnt.keyCode) {
            switch (gridChoice) {
            case 0:
                gridLayer.classList.add('column-grid');
                gridLayer.classList.remove('user-supplied-bg-image');

                break;

            case 1:
                gridLayer.classList.remove('column-grid');
                gridLayer.classList.add('modular-grid');

                break;

            case 2:
                gridLayer.classList.remove('modular-grid');
                gridLayer.classList.add('baseline-grid');

                break;

            case 3:
                gridLayer.classList.remove('baseline-grid');
                gridLayer.classList.add('all-grids');

                break;

            case 4:
                gridLayer.classList.remove('all-grids');
                gridLayer.classList.add('user-supplied-bg-image');

                break;

            case 5:
                gridLayer.classList.remove('user-supplied-bg-image');
                break;
            }

            if (gridChoice++ === 5) {
                gridChoice = 0;
            }
        }
    };
}