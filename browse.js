const categories = [
    {url: POPULAR, id: "popular"},
    {url: TOP_RATED, id: "topRated"},
    {url: UPCOMING, id: "upcoming"}
];

const sampleData = {
    results: [
        {
            title: "Stranger Things",
            poster_path: "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
            backdrop_path: "/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
            release_date: "2016-07-15",
            vote_average: 8.6,
            overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        },
        {
            title: "Wednesday",
            poster_path: "/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
            backdrop_path: "/9uDNor1hXiGAB5A2y9j2yWxUF0q.jpg",
            release_date: "2022-11-23",
            vote_average: 7.5,
            overview: "Wednesday Addams attempts to master her emerging psychic ability, stop a monstrous killing spree and solve the mystery that embroiled her parents 25 years ago."
        },
        {
            title: "Money Heist",
            poster_path: "/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
            backdrop_path: "/yTlzvC8tB0l5g0AcW9QeHYNFooy.jpg",
            release_date: "2017-05-02",
            vote_average: 8.3,
            overview: "A criminal mastermind plans the biggest heist in recorded history to print billions of euros in the Royal Mint of Spain."
        },
        {
            title: "The Witcher",
            poster_path: "/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",
            backdrop_path: "/jsXyD3oBWKyDxoPb7ae3Yp5vWQl.jpg",
            release_date: "2019-12-20",
            vote_average: 8.1,
            overview: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts."
        },
        {
            title: "Extraction 2",
            poster_path: "/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
            backdrop_path: "/wg2P4sLrY3o5G3hQMJ4b7K4ktH6.jpg",
            release_date: "2023-06-13",
            vote_average: 7.1,
            overview: "Tyler Rake returns for another deadly mission, trying to survive a seemingly impossible mission in a hostile city."
        },
        {
            title: "Avatar: The Way of Water",
            poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
            backdrop_path: "/eX7tY2GZgNVALyI1daOcwoYrdHN.jpg",
            release_date: "2022-12-16",
            vote_average: 7.7,
            overview: "Jake Sully and Neytiri fight to keep their family together while navigating the threats of the alien world of Pandora."
        }
    ]
};

categories.forEach(loadMovies);

async function fetchMovieData(url) {
    if (HAS_API_KEY && url) {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("API request failed");
            return await res.json();
        } catch (error) {
            console.warn("TMDB fetch failed, falling back to sample data.", error);
        }
    }
    return sampleData;
}

async function loadMovies(category) {
    const data = await fetchMovieData(category.url);
    const container = document.getElementById(category.id);
    container.innerHTML = "";

    data.results.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";

        const img = document.createElement("img");
        img.src = `${IMAGE_URL}${movie.poster_path}`;
        img.alt = movie.title;

        const title = document.createElement("h3");
        title.textContent = movie.title;

        const button = document.createElement("button");
        button.textContent = "Details";
        button.addEventListener("click", () => showDetails(movie));

        card.append(img, title, button);
        container.appendChild(card);
    });
}

const modal = document.getElementById("movieModal");

function showDetails(movie) {
    document.getElementById("modalImage").src = IMAGE_URL + movie.poster_path;
    document.getElementById("modalTitle").innerText = movie.title;
    document.getElementById("modalDate").innerText = "Release: " + movie.release_date;
    document.getElementById("modalRating").innerText = "⭐ " + movie.vote_average;
    document.getElementById("modalOverview").innerText = movie.overview;

    modal.style.display = "flex";

    document.getElementById("watchlistBtn").onclick = function () {
        let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        watchlist.push(movie);
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
        alert("Added to Watchlist");
    };
}

document.getElementById("close").onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};

window.onload = function () {
    document.getElementById("loader").style.display = "none";
    loadHeroMovie();
};

async function loadHeroMovie() {
    const data = await fetchMovieData(POPULAR);
    const movie = data.results[0];

    document.querySelector(".hero-banner").style.backgroundImage =
        `url(${BACKDROP_URL}${movie.backdrop_path})`;

    document.getElementById("heroTitle").textContent = movie.title;
    document.getElementById("heroOverview").textContent = movie.overview;

    document.getElementById("watchTrailer").onclick = function () {
        const query = encodeURIComponent(movie.title + " Official Trailer");
        window.open(`https://www.youtube.com/results?search_query=${query}`, "_blank");
    };
}
