window.onload = function () {
    setTimeout(function () {
        var popupContainer = document.getElementById("popupContainer");
        popupContainer.style.display = "flex";
        
        var closeButton = document.getElementById("closeButton");
        closeButton.addEventListener("click", function () {
            popupContainer.style.display = "none";
        });
        
        var explore = document.getElementById("explore");
        explore.addEventListener("click", function () {
            popupContainer.style.display = "none";
        });
        
    }, 3000);
};