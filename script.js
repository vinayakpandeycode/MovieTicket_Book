let selectedMovie = "";
let ticketPrice = 0;

function bookTicket(movieName, category, price) {
    selectedMovie = movieName;
    ticketPrice = price;

    document.getElementById("movie-name").innerText = movieName + " (" + category + ")";
    document.getElementById("ticket-price").innerText = price;
    document.getElementById("booking-container").classList.remove("hidden");
}

function confirmBooking() {
    let seats = document.getElementById("seats").value;
    if (seats > 0) {
        let totalAmount = seats * ticketPrice;
        alert(`🎟️ ${seats} tickets booked for ${selectedMovie}.\nTotal Price: ₹${totalAmount}`);
        document.getElementById("booking-container").classList.add("hidden");
    } else {
        alert("Please select at least 1 seat.");
    }
}
