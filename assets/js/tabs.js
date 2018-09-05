var works_tab; // заголовок вкладки
var tab_content; // блок содержащий контент вкладки


window.onload = function () {
    tab_content = document.getElementsByClassName('tab_сontent');
    works_tab = document.getElementsByClassName('works_tab');
    tabHr = document.getElementsByClassName('tabHr')
}

document.getElementById('works_tabs').onclick = function (event) {
    var target = event.target;
    if (target.className == 'works_tab') {
        for (var i = 0; i < works_tab.length; i++) {
            if (target == works_tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}

function hideTabsContent(a) {
    for (var i = a; i < tab_content.length; i++) {
        tab_content[i].classList.remove('works_show');
        tab_content[i].classList.add("works_hide");
        works_tab[i].classList.remove('choosedBorder');
    }
}

function showTabsContent(b) {
    if (tab_content[b].classList.contains('works_hide')) {
        hideTabsContent(0);
        works_tab[b].classList.add('choosedBorder');
        tab_content[b].classList.remove('works_hide');
        tab_content[b].classList.add('works_show');
    }
}

$(window).resize(function () {
    if (document.documentElementById('tab_сontent').offsetWidth >= 1170) {
        tabHr[6].classList.add('works_show');
        tabHr[8].classList.add('works_show');
    }
    else if (document.documentElementById('works_tab').offsetWidth >= 768) {
        tabHr[6].classList.remove('works_show');
        tabHr[8].classList.remove('works_show');
        tabHr[3].classList.add('works_show');
        tabHr[7].classList.add('works_show');
        tabHr[8].classList.add('works_show');
    }
});