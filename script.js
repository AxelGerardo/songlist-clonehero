// Lista de canciones 
const songs = [
    { name: "Shape of You", artist: "Ed Sheeran" },
    { name: "Blinding Lights", artist: "The Weeknd" },
    { name: "Rolling in the Deep", artist: "Adele" },
    { name: "Bohemian Rhapsody", artist: "Queen" },
    { name: "Someone Like You", artist: "Adele" },
    { name: "Thriller", artist: "Michael Jackson" },
    { name: "Hotel California", artist: "Eagles" },
    { name: "Stairway to Heaven", artist: "Led Zeppelin" },
    { name: "Sweet Child O' Mine", artist: "Guns N' Roses" },
    { name: "Billie Jean", artist: "Michael Jackson" },
    { name: "Smells Like Teen Spirit", artist: "Nirvana" },
    { name: "Wonderwall", artist: "Oasis" },
    { name: "Hey Jude", artist: "The Beatles" },
    { name: "Imagine", artist: "John Lennon" },
    { name: "Yesterday", artist: "The Beatles" },
    { name: "Like a Rolling Stone", artist: "Bob Dylan" },
    { name: "Hotel California", artist: "Eagles" },
    { name: "Satisfaction", artist: "The Rolling Stones" },
    { name: "Good Vibrations", artist: "The Beach Boys" },
    { name: "Purple Haze", artist: "Jimi Hendrix" }
];

// Configuración de la paginación
const rowsPerPage = 7;
let currentPage = 1;

function displaySongs(page) {
    const tableBody = document.getElementById("songsBody");
    tableBody.innerHTML = "";
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const songsToDisplay = songs.slice(startIndex, endIndex);

    songsToDisplay.forEach(song => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${song.name}</td><td>${song.artist}</td>`;
        tableBody.appendChild(row);
    });

    document.getElementById("pageInfo").textContent = `Página ${currentPage} de ${Math.ceil(songs.length / rowsPerPage)}`;
    document.getElementById("prevBtn").disabled = currentPage === 1;
    document.getElementById("nextBtn").disabled = currentPage === Math.ceil(songs.length / rowsPerPage);
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displaySongs(currentPage);
    }
}

function nextPage() {
    if (currentPage < Math.ceil(songs.length / rowsPerPage)) {
        currentPage++;
        displaySongs(currentPage);
    }
}

document.getElementById("prevBtn").addEventListener("click", prevPage);
document.getElementById("nextBtn").addEventListener("click", nextPage);

// Mostrar la primera página al cargar
displaySongs(currentPage);
