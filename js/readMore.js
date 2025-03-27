             function toggleAll() {
               var contents = document.querySelectorAll(".content");
               var button = document.querySelector(".read-more");

               let isHidden = Array.from(contents).some(
                 (content) =>
                   content.style.display === "none" ||
                   content.style.display === ""
               );

               contents.forEach((content) => {
                 content.style.display = isHidden ? "block" : "none";
               });

               button.textContent = isHidden ? "Show Less" : "Read More";
             }
