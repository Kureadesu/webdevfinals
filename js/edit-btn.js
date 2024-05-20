const editableParagraphs = document.querySelectorAll(".editable");
const edit_button = document.querySelector(".edit-btn");
const end_button = document.querySelector(".end-editing");
const first_name = document.getElementById("fname");
const last_name = document.getElementById("lname");
const middle_name = document.getElementById("Mname");
const nameElement = first_name + middle_name + last_name;
const idNumberElement = document.querySelector(".idno");
const programElement = document.querySelector(".prog");

function editText() {
    edit_button.addEventListener("click", function() {
        editableParagraphs.forEach(paragraph => {
            paragraph.contentEditable = true;
            paragraph.style.border = "1px solid black";
        });
        end_button.style.display = "block";
    } );
    end_button.addEventListener("click", function() {
        editableParagraphs.forEach((paragraph, index) => {
            paragraph.contentEditable = false;
            paragraph.style.border = "none";
            switch (index) {
                case 0:
                    nameElement.textContent = paragraph.textContent;
                    break;
                case 1:
                    idNumberElement.textContent = paragraph.textContent;
                    break;
                case 2:
                    programElement.textContent = paragraph.textContent;
                    break;
            }
        });
        end_button.style.display = "none";
    } );
}
editText();