document.addEventListener("DOMContentLoaded", function () {

    let eventCard = document.querySelectorAll(".event-card");

    eventCard.forEach(function (card) {

        let saveButton = document.createElement("button");

        saveButton.textContent = "Save Event";

        card.append(saveButton);

        saveButton.addEventListener("click", function () {

            card.classList.add("saved-event");

            saveButton.textContent = "Remove Event";

        });

    });

});

