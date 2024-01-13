var tap = document.querySelector('.tab-container .tab[data-tab="history"')
tap .classList.add('active');

var image = document.getElementById('images')
image.src = 'history.jpg';

var tapcontent = document.getElementById('history-content')
tapcontent.style.display = 'flex'

function Tabchange(tabname){ 
    var tabs = document.querySelectorAll('.tab')
    tabs.forEach(function(tab){
        tab.classList.remove('active')
    });

    var tabclick = document.querySelector('.tab-container .tab[data-tab="'+tabname+'"]')
    tabclick.classList.add('active')

    var image = document.getElementById('images')

    switch(tabname){
        case 'history':
            image.src = 'history.jpg'
            break;
        case 'vision': 
            image.src = 'vision.jpg'
            break;
        case 'goals':
            image.src = 'goal.jpg'
            break;   
        default:
            break; 
    }

    var contentstab = document.querySelectorAll('.tab-content')
    contentstab.forEach(function(content){
        content.style.display = 'none';
    })

    var contentclick = document.getElementById(tabname + '-content') 
    contentclick.style.display = 'flex'
}





