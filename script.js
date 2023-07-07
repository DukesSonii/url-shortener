const shortenUrl = async () => {
    const longUrl = document.getElementById("url").value.trim();
    if (longUrl === "") {
      alert("Please enter a URL");
      return;
    }
    if (!longUrl.startsWith("http://") && !longUrl.startsWith("https://")) {
        const shortUrlField = document.getElementById("url");
        const shortUrl = shortUrlField.value.trim();
      alert("Please enter a valid URL");
      shortUrlField.value = "";
      return;
    }
  
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
      const data = await response.json();
      const shortUrl = data.result.full_short_link;
  
      const shortUrlField = document.getElementById("url");
      shortUrlField.value = shortUrl;
    } catch (error) {
      alert("Error shortening URL. Please try again later.");
    }
  };
  
  const copyUrl = () => {
    const shortUrlField = document.getElementById("url");
    const shortUrl = shortUrlField.value.trim();
    if (shortUrl === "") {
      alert("No URL to copy");
      return;
    }
    navigator.clipboard.writeText(shortUrl).then(() => {
      alert("URL copied to clipboard");
      shortUrlField.value = "";
    });
  };
  
  document.getElementById("shortUrl").addEventListener("click", shortenUrl);
  document.getElementById("copyUrl").addEventListener("click", copyUrl);
  