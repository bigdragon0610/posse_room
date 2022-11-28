const submitButton = document.getElementById("submit_button");
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  submitButton.style.display = "none";
  html2canvas(document.querySelector("body")).then((canvas) => {
    let downloadEle = document.createElement("a");
    downloadEle.href = canvas.toDataURL("image/png");
    downloadEle.download = "posse_room.png";
    downloadEle.click();
  });
  submitButton.style.display = "block";
});
