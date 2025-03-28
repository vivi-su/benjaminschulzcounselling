function toggleAll() {
  var contents = document.querySelectorAll(".content");
  var buttons = document.querySelectorAll(".read-more");

  let isHidden = Array.from(contents).some(
    (content) =>
      content.style.display === "none" || content.style.display === ""
  );

  contents.forEach((content) => {
    content.style.display = isHidden ? "block" : "none";
  });

  buttons.forEach((button) => {
    button.textContent = isHidden ? "Show Less" : "Read More";
  });
}
