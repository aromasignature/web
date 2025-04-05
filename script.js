function toggleText() {
    const moreText = document.getElementById("more-text");
    const btnText = document.getElementById("see-more-btn");

    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btnText.innerHTML = "See Less";
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "See More";
    }
  }

  


    window.onload = function () {
        let favicon = document.getElementById("favicon");
        let newFavicon = document.createElement("link");
        newFavicon.rel = "icon";
        newFavicon.type = "image/png";
        newFavicon.href = "favicon.png"; // Make sure this is a properly sized version

        document.head.removeChild(favicon);
        document.head.appendChild(newFavicon);
    };