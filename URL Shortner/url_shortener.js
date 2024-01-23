function shortenUrl() {
      var longUrl = document.getElementById("long-url").value;
      
      var shortenedUrl = "https://short.url/" + Math.random().toString(36).substr(2, 7);
      
      document.getElementById("shortened-url").innerHTML = "Shortened URL: <a href='" + shortenedUrl + "' target='_blank'>" + shortenedUrl + "</a>";
    }