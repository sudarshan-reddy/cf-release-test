var fs = require('fs');

export const onRequest = () => {
    var filesLink="<ul>";
    res.setHeader('Content-type', 'text/html');
    var filesList=fs.readdirSync("./resources");
      
    filesList.forEach(element => {
        if(fs.statSync("./"+element).isFile()) {
            filesLink +=`<br/><li><a href='./${element}'>
                ${element}
            </a></li>` ;        
        }
    });
    filesLink+="</ul>";
     
    res.end("<h1>List of files:</h1> " + filesLink);
}
