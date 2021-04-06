let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:[],
    genres: [],
    privat:false}

const
    film_1 = prompt('Один из последних просмотренных фильмов?','')
    rate_1 = prompt('На сколько оцените его?','')
    film_2 = prompt('Один из последних просмотренных фильмов?','')
    rate_2 = prompt('На сколько оцените его?','')
personalMovieDB.movies[film_1] = [rate_1]
personalMovieDB.movies[film_2] = [rate_2]

console.log(personalMovieDB)
