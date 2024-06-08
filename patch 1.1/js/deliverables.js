document.addEventListener("DOMContentLoaded", function() {
    const deliverables = [
        { title: "Project Proposal", deadline: "2024-06-15" },
        { title: "Midterm Report", deadline: "2024-07-01" },
        { title: "Final Presentation", deadline: "2024-08-10" }
    ];

    function displayDeliverables(deliverables) {
        const deliverablesList = document.getElementById("deliverables-list");

        deliverables.forEach(deliverable => {
            const deliverableItem = document.createElement("div");
            deliverableItem.classList.add("deliverable-item");

            const title = document.createElement("h3");
            title.textContent = deliverable.title;

            const deadline = document.createElement("p");
            deadline.textContent = `Deadline: ${deliverable.deadline}`;

            deliverableItem.appendChild(title);
            deliverableItem.appendChild(deadline);

            deliverablesList.appendChild(deliverableItem);
        });
    }

    displayDeliverables(deliverables);
});
