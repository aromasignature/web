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

  

