const books = [
    { title: "To Kill a Mockingbird", language: "English", genre: ["Fiction", "Classic"], pages: 281, year: 1960 },
    { title: "One Hundred Years of Solitude", language: "Spanish", genre: ["Fiction", "Magical Realism"], pages: 417, year: 1967 },
    { title: "1984", language: "English", genre: ["Dystopian", "Sci-Fi"], pages: 328, year: 1949 },
    { title: "The Great Gatsby", language: "English", genre: ["Fiction", "Classic"], pages: 180, year: 1925 },
    { title: "Pride and Prejudice", language: "English", genre: ["Romance", "Classic"], pages: 279, year: 1813 },
    { title: "The Catcher in the Rye", language: "English", genre: ["Fiction", "Classic"], pages: 277, year: 1951 },
    { title: "Crime and Punishment", language: "Russian", genre: ["Fiction", "Psychological"], pages: 671, year: 1866 },
    { title: "The Hobbit", language: "English", genre: ["Fantasy", "Adventure"], pages: 310, year: 1937 },
    { title: "War and Peace", language: "Russian", genre: ["Historical", "Classic"], pages: 1225, year: 1869 },
    { title: "The Alchemist", language: "Portuguese", genre: ["Fiction", "Philosophy"], pages: 208, year: 1988 },
    { title: "Sapiens", language: "English", genre: ["Non-Fiction", "History"], pages: 443, year: 2011 },
    { title: "Brave New World", language: "English", genre: ["Dystopian", "Sci-Fi"], pages: 311, year: 1932 },
    { title: "Moby-Dick", language: "English", genre: ["Adventure", "Classic"], pages: 635, year: 1851 },
    { title: "The Book Thief", language: "English", genre: ["Historical", "Fiction"], pages: 552, year: 2005 },
    { title: "Don Quixote", language: "Spanish", genre: ["Adventure", "Classic"], pages: 863, year: 1605 },
    { title: "The Kite Runner", language: "English", genre: ["Fiction", "Drama"], pages: 372, year: 2003 },
    { title: "Meditations", language: "Greek", genre: ["Philosophy", "Self-Help"], pages: 256, year: 180 },
    { title: "The Brothers Karamazov", language: "Russian", genre: ["Philosophy", "Classic"], pages: 824, year: 1880 },
    { title: "Fahrenheit 451", language: "English", genre: ["Dystopian", "Sci-Fi"], pages: 194, year: 1953 },
    { title: "Les Misérables", language: "French", genre: ["Historical", "Classic"], pages: 1463, year: 1862 },
    { title: "The Road", language: "English", genre: ["Post-Apocalyptic", "Fiction"], pages: 287, year: 2006 },
    { title: "Jane Eyre", language: "English", genre: ["Romance", "Classic"], pages: 532, year: 1847 },
    { title: "Wuthering Heights", language: "English", genre: ["Romance", "Classic"], pages: 416, year: 1847 },
    { title: "Frankenstein", language: "English", genre: ["Horror", "Classic"], pages: 280, year: 1818 },
    { title: "Anna Karenina", language: "Russian", genre: ["Romance", "Classic"], pages: 864, year: 1878 },
    { title: "The Picture of Dorian Gray", language: "English", genre: ["Gothic", "Classic"], pages: 254, year: 1890 },
    { title: "Dracula", language: "English", genre: ["Horror", "Classic"], pages: 418, year: 1897 },
    { title: "The Little Prince", language: "French", genre: ["Fiction", "Philosophy"], pages: 96, year: 1943 }
];
//1. books released after 2000
var book=books.filter((b)=>b.year>2000).map((b)=>b.title)
console.log(book);

//2. book with genre == fiction

var fictionBooks=books.filter((b)=>b.genre.includes("Fiction")).map((b)=>b.title)
console.log(fictionBooks);

//3. english books
var engBooks=books.filter((b)=>b.language=="English").map((b)=>b.title)
console.log(engBooks);

//4. in which language most number of books published
var lang=books.map((b)=>b.language)
var lanCount={}
for(let l of lang){
    l in lanCount?lanCount[l]+=1:lanCount[l]=1
}
console.log(lanCount);

var nestedArray=Object.entries(lanCount)
nestedArray.sort((l1,l2)=>l2[1]-l1[1])
console.log(nestedArray[0]);


//5. 

//6. book with maximum number of pages
var maxPages=books.reduce((b1,b2)=>b1.pages>b2.pages?b1:b2)
console.log(maxPages);

//7. book published btw  1960-2000

var bookYr=books.filter((b)=>b.year>1960 && b.year<2000).map((b)=>b.title)
console.log(bookYr);

//8. in which genre most number of books published
var genreArray=books.map((b)=>b.genre).flat()
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
//9. 

