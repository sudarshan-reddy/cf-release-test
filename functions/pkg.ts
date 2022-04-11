export const onRequest = () => {
    var filesLink="<ul>";
    res.setHeader('Content-type', 'text/html');
    filesList = ["https://github.com/sudarshan-reddy/cf-release-test/blob/main/debian/Packages.gz"];
      
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
