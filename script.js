window.addEventListener('DOMContentLoaded', function(){ //Запускаем скрипт, когда загружен ДОМ
    'use strict';
    console.log('подгрузился'); //проверяем в консоли, что ДОМ загрузился
    let tab = document.querySelectorAll('.info-header-tab'), // сами табы
        info = document.querySelector('.info-header'),//обертка для табов
        tabContent = document.querySelectorAll('.info-tabcontent');//содержимое табов

    function hideTabContent(a){ //прячем все табы, начиная с номера a
        for (let i=a; i<tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        };
    };
    hideTabContent(1); //прячем табы с первого

    function showTabContant(b){ //показываем таб с номером b
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        };
    };

    info.addEventListener('click', function(event) { //делегируем полномочия родителю табов
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i=0; i<tab.length; i++){
                if (target==tab[i]) { //если попали в i-тый таб, показываем i-тый контент, сначала прячем все табы
                    hideTabContent(0);
                    showTabContant(i);
                    break;
                }
            };
        };

    });
});

//спасибо за внимание :)