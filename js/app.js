'use strict';


function Horn(element) {
    this.image_url = element.image_url;
    this.title = element.title;
    console.log(this.title);
    this.description = element.description;
}

Horn.prototype.render = function () {

    let secClone = $('.photo-template').clone();
    secClone.removeClass('photo-template');
    secClone.find('h2').text(this.title);
    secClone.find('img').attr('src', this.image_url);
    secClone.find('p').text(this.description);
    $('main').append(secClone);

}

$.get('./data/page-1.json')
    .then(data => {
        //    console.log(data);
        data.forEach((element, ind) => {

            let newHorn = new Horn(element);
    newHorn.render();
            //    console.log(element);
        })

    });
