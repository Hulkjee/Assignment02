document.addEventListener("DOMContentLoaded", function () {

    let eventCard = document.querySelectorAll(".event-card");

    // Created saved event section
    let main = document.querySelector("main");

    let savedSection = document.createElement("section");
    savedSection.id = "saved-events";

    let savedTitle = document.createElement("h2");
    savedTitle.textContent = "Saved Events";

    let savedMessage = document.createElement("p");
    savedMessage.textContent = "No events have been saved yet.";

    let savedList = document.createElement("ul");

    savedSection.append(savedTitle);
    savedSection.append(savedMessage);
    savedSection.append(savedList);

    main.append(savedSection);


    // Goes through each card
    eventCard.forEach(function (card) {

        // Save Event button
        let saveButton = document.createElement("button");

        saveButton.textContent = "Save Event";
        saveButton.classList.add("save-button");

        card.append(saveButton);

        let savedItem = null;


        // Listen for button click
        saveButton.addEventListener("click", function () {

            
            if (card.classList.contains("saved-event")) {

                card.classList.remove("saved-event");

                saveButton.textContent = "Save Event";

                if (savedItem) {
                    savedItem.remove();
                    savedItem = null;
                }

            } else {

                // Save the event
                card.classList.add("saved-event");

                saveButton.textContent = "Remove Event";


                // Get event information
                let eventName = card.querySelector("h3").textContent;

                let eventTime = card.querySelector("time").textContent;

                let eventLocation = card.querySelectorAll("p")[2].textContent;


                // Create list item
                savedItem = document.createElement("li");

                savedItem.textContent =
                    eventName + " - " +
                    eventTime + " - " +
                    eventLocation;

                savedList.append(savedItem);

            }


            // Shows message only when no events are saved
            if (savedList.children.length === 0) {

                savedMessage.textContent = "No events have been saved yet.";

            } else {

                savedMessage.textContent = "";

            }

        });

    });

});