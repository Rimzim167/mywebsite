const animals = {
    dog: {
        name: "Dog",
        photo: "images/dog.jpg",
        description: "Dogs are loyal companions who will fill your life with joy and protection."
    },
    cat: {
        name: "Cat",
        photo: "images/cat.jpg",
        description: "Cats are curious and graceful, offering endless entertainment and love."
    },
    rabbit: {
        name: "Rabbit",
        photo: "images/rabbit.jpeg",
        description: "Rabbits are playful and gentle, bringing happiness to every home."
    }
};

function showAnimal(animal) {
    const details = animals[animal];
    document.getElementById("animal-name").innerText = details.name;
    document.getElementById("animal-photo").src = details.photo;
    document.getElementById("animal-description").innerText = details.description;

    document.getElementById("animal-details").classList.remove("hidden");
    document.getElementById("adoption-form").classList.add("hidden");
}

function openAdoptForm() {
    document.getElementById("adoption-form").classList.remove("hidden");
    document.getElementById("animal-details").classList.add("hidden");
}