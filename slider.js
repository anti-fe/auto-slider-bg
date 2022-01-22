const slider = document.querySelector('.page-slider');
const imgs = document.querySelectorAll('.slider__img');

//Счетчик
let imgCount = 0;
//Через каждые 8сек картинка будет меняться
let changeInterval = setInterval(autoChange, 8000);

function changeImg() {
    //Если картинка последняя, перелистывать на первую
    if(imgCount > imgs.length - 1) {
        imgCount = -1;
    //Иначе, плавно смещать картинку за ширину экрана 
    } else {
        imgs.forEach(item => {
            item.style.transform = `translateX(${-imgCount*1920}px)`;
            item.style.transition = 'transform 1s ease-in-out';
        })
    }
}
//Автоматическая смена картинки
function autoChange() {
    imgCount++;
    changeImg();
}
