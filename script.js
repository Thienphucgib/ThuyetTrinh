document.addEventListener("DOMContentLoaded", function() {
    const lines = document.querySelectorAll(".line");
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = 1;
        }, index * 1000); // Mỗi dòng xuất hiện sau 1 giây
    });
});
