const movies = [
    { title: "Inception", language: "English", genre: ["Sci-Fi", "Action", "Thriller"], runtime: 148, year: 2010 },
    { title: "Parasite", language: "Korean", genre: ["Drama", "Thriller"], runtime: 132, year: 2019 },
    { title: "Interstellar", language: "English", genre: ["Sci-Fi", "Drama", "Adventure"], runtime: 169, year: 2014 },
    { title: "Spirited Away", language: "Japanese", genre: ["Animation", "Fantasy", "Adventure"], runtime: 125, year: 2001 },
    { title: "The Dark Knight", language: "English", genre: ["Action", "Crime", "Drama"], runtime: 152, year: 2008 },
    { title: "Coco", language: "English", genre: ["Animation", "Family", "Fantasy"], runtime: 105, year: 2017 },
    { title: "The Godfather", language: "English", genre: ["Crime", "Drama"], runtime: 175, year: 1972 },
    { title: "Dangal", language: "Hindi", genre: ["Biography", "Drama", "Sport"], runtime: 161, year: 2016 },
    { title: "The Matrix", language: "English", genre: ["Action", "Sci-Fi"], runtime: 136, year: 1999 },
    { title: "Your Name", language: "Japanese", genre: ["Animation", "Drama", "Fantasy"], runtime: 106, year: 2016 },
    { title: "Avatar", language: "English", genre: ["Sci-Fi", "Adventure", "Fantasy"], runtime: 162, year: 2009 },
    { title: "Joker", language: "English", genre: ["Drama", "Crime", "Thriller"], runtime: 122, year: 2019 },
    { title: "Shawshank Redemption", language: "English", genre: ["Drama"], runtime: 142, year: 1994 },
    { title: "Forrest Gump", language: "English", genre: ["Drama", "Romance"], runtime: 142, year: 1994 },
    { title: "Titanic", language: "English", genre: ["Drama", "Romance"], runtime: 195, year: 1997 },
    { title: "Gladiator", language: "English", genre: ["Action", "Drama"], runtime: 155, year: 2000 },
    { title: "The Lion King", language: "English", genre: ["Animation", "Adventure", "Drama"], runtime: 88, year: 1994 },
    { title: "The Prestige", language: "English", genre: ["Drama", "Mystery", "Sci-Fi"], runtime: 130, year: 2006 },
    { title: "Black Panther", language: "English", genre: ["Action", "Adventure", "Sci-Fi"], runtime: 134, year: 2018 },
    { title: "Avengers: Endgame", language: "English", genre: ["Action", "Adventure", "Sci-Fi"], runtime: 181, year: 2019 },
    { title: "A Beautiful Mind", language: "English", genre: ["Biography", "Drama"], runtime: 135, year: 2001 },
    { title: "The Grand Budapest Hotel", language: "English", genre: ["Comedy", "Adventure"], runtime: 99, year: 2014 },
    { title: "Mad Max: Fury Road", language: "English", genre: ["Action", "Adventure", "Sci-Fi"], runtime: 120, year: 2015 },
    { title: "The Social Network", language: "English", genre: ["Biography", "Drama"], runtime: 120, year: 2010 },
    { title: "Whiplash", language: "English", genre: ["Drama", "Music"], runtime: 107, year: 2014 },
    { title: "Life of Pi", language: "English", genre: ["Adventure", "Drama", "Fantasy"], runtime: 127, year: 2012 },
    { title: "Slumdog Millionaire", language: "English", genre: ["Drama", "Romance"], runtime: 120, year: 2008 },
    { title: "The Departed", language: "English", genre: ["Crime", "Drama", "Thriller"], runtime: 151, year: 2006 },
    { title: "Pulp Fiction", language: "English", genre: ["Crime", "Drama"], runtime: 154, year: 1994 }
];
//q1)number of  english movies

var engMovies=movies.filter((m1)=>m1.language=="English")
console.log(engMovies.length);

//q2)action movies name

var actionMovies=movies.filter(((m1)=>m1.genre.includes("Action"))).map((m1)=>m1.title)
console.log(actionMovies);

//q4)movies released after 2015

var movieReleased=movies.filter((m)=>m.year>2015).map((m)=>m.title)
console.log(movieReleased);

//q5)movie with highest runtime

var highRunTime=movies.reduce((m1,m2)=>m1.runtime>m2.runtime?m1:m2)
console.log(highRunTime);

//q6)in which language most number of movies released

// var language=movies.map((m)=>m.language)
// var languageCount={}

// for(let m of language){

//     m in languageCount?languageCount[m]+=1:languageCount[m]=1
// }

var languageCount={}
for(let m of movies){
    let lang=m.language
    if(lang in languageCount){
        languageCount[lang]+=1
    }
    else{
        languageCount[lang]=1
    }
}
console.log(languageCount);

var nestedArray=Object.entries(languageCount)
nestedArray.sort((l1,l2)=>l2[1]-l1[1])
console.log(nestedArray[0]);



//q7)in which genre most number of movies released

var genreArray=movies.map((m)=>m.genre).flat()
let gc={}
for(let g of genreArray){
    if(g in gc){
        gc[g]+=1
    }
    else{
        gc[g]=1
    }

}
var gcNestedArray=Object.entries(gc)
gcNestedArray.sort((g1,g2)=>g2[1]-g1[1])
console.log(gcNestedArray[0]);


//q9)english movies released after 2010
var movieYr=movies.filter((m)=>m.language=="English" && m.year>2010).map((m)=>m.title)
console.log(movieYr);

//q10)movies released between 1990 to 2010
var movieReleasedBWYrs=movies.filter((m)=>m.year>1990 && m.year<2010).map((m)=>m.title)
console.log(movieReleasedBWYrs)

//q11)in which year most number of movies released

var mC={}
var year=movies.map((m)=>m.year)
for(let yr of year){
    yr in mC?mC[yr]+=1:mC[yr]=1

}
var nestedArray=Object.entries(mC)
nestedArray.sort((y1,y2)=>y2[1]-y1[1])
console.log(nestedArray[0]);

//q8)movie with more than 2 genres

var genreArray=movies.filter((m)=>m.genre.length>2).map((m)=>m.title)
console.log(genreArray);



