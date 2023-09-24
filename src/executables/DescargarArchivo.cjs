const http = require('https'); // or 'https' for https:// URLs
const fs = require('fs');

const file = fs.createWriteStream("catalogo.csv");
const request = http.get("https://www.gutenberg.org/cache/epub/feeds/pg_catalog.csv", function(response) {
   response.pipe(file);
   // after download completed close filestream
   file.on("finish", () => {
       file.close();
       console.log("Download Completed");
   });
});

