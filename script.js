// Sample Movie Data
const movies = [
    {
        title: "Stranger Things",
        image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
    },
    {
        title: "Wednesday",
        image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg"
    },
    {
        title: "Money Heist",
        image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
    },
    {
        title: "The Witcher",
        image: "https://image.tmdb.org/t/p/w500/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg"
    },
    {
        title: "Extraction 2",
        image: "https://image.tmdb.org/t/p/w500/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg"
    },
    {
        title: "Avatar: The Way of Water",
        image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
    }
];

// Get movie container
const movieContainer = document.getElementById("movie-container");

// Display movies
function displayMovies() {
    movieContainer.innerHTML = "";

    movies.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;

        movieContainer.appendChild(card);
    });

    const toggle = document.getElementById("themeToggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
        });
    }
}

// Load movies when page opens
displayMovies();