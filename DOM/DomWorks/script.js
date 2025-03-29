function toggleHoneGreen(){
    var honeTags=document.getElementsByTagName("h1")
    console.log(honeTags);
    
    Array.from(honeTags).map((t)=>t.style.color="green")
}

function toggleHtwoGreen(){
    let htwoTags=document.getElementsByTagName("h2")
    Array.from(htwoTags).map((t)=>t.style.color="red")
}