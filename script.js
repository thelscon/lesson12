'use strict' ;

const slides = [
    new Slide (
        1 ,
        'Poo 1' ,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' ,
        'Content 1'
    ) ,
    new Slide (
        2 ,
        'Poo 2' ,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' ,
        'Content 2'
    ) ,
    new Slide (
        3 ,
        'Poo 3' ,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' ,
        'Content 3'
    )
] ;

slides.forEach ( (slide) => {
    console.log (slide) ;
}) ;

const listOfUsers = [
    {
        id : 1 ,
        name : 'Petya' ,
        background : '' ,
        about : '...' ,
        taxesPayed : true ,
        debt : 0
    } ,
    {
        id : 1 ,
        name : 'Vasya' ,
        background : '' ,
        about : '...' ,
        taxesPayed : false ,
        debt : 1000
    } ,
    {
        id : 1 ,
        name : 'Inokentiy' ,
        background : '' ,
        about : '...' ,
        taxesPayed : false ,
        debt : 35000
    }
] ;

const newArr =slides.map ((slide) => `${slide.title}-${slide.content}`) ;
const listOfSlidesFromUsers = listOfUsers.map (
    (user) => new Slide (user.id, user.name, user.avatar, user.about)
) ;

const usersWithAvatar = listOfUsers.filter ((user) => !!user.avatar ) ;

const atLeastOne = listOfUsers.some ((user) => !user.taxesPayed) ;
const allOfusers = listOfUsers.every ((user) => !user.taxesPayed) ;

const debt = listOfUsers.reduce ((acc, next) => acc + next.debt, 0) ;

console.log (allOfusers) ;