const inputBox = document.getElementById("input-box");
        const listContainer = document.getElementById("list-container");

        function addTask() {
            if (inputBox.value === '') {
                alert("You must write something");
            } else {
                let li = document.createElement("li");
                li.innerHTML = inputBox.value;
                listContainer.appendChild(li);

                let span = document.createElement("span");
                span.innerHTML = "\u00d7"; // Unicode for '×'
                span.className = "close";
                li.appendChild(span);
            }
            inputBox.value = "";
        }
        inputBox.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });

        // Optional: Add event listener to handle removing tasks when the '×' is clicked
        listContainer.addEventListener('click', function (e) {
            if (e.target.tagName === 'SPAN') {
                e.target.parentElement.remove();
            }
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("checked");
            }
        });