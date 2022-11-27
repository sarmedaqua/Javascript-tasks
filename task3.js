const star ="*";

function task3_star_pattern(star,rows,max_star){
    var j="";
    for(let x=0; x<rows;x++){
    for(let i=0; i<max_star;i++){
        j+=star;
    }
    j+= "\n";
    if(max_star==2) max_star--;
    else max_star-=2;
}
return j;
}

console.log(task3_star_pattern(star,4,6));