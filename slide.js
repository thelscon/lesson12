'use strict' ;

function Slide (id, title, background, content) {
    this.id = id ;
    this.title = title ;
    this.background = background ;
    this.content = content ;
    this.show = false ;

    this.toogle = function () {
        this.show = !this.show ;
    } ;
}