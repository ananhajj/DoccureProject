/* loader spinner */
document.addEventListener("DOMContentLoaded", function () {
    var loading = document.getElementById("loading");

    // Hide the loader after the page is fully loaded
    window.addEventListener("load", function () {
        loading.classList.add("hidden");
    });

    // Optionally, ensure the spinner is visible when navigating away
    window.addEventListener("beforeunload", function () {
        loading.classList.remove("hidden");
    });
});
