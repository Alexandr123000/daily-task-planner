export default function Header() {
    const links = document.querySelectorAll(".nav-link");
    const currentPageSpan = document.getElementById("currentPage");
   
    function setActive(page) { //renewing button and text
        links.forEach(link => {
            link.classList.remove("active");
            if (link.dataset.page === page) {
                link.classList.add("active");
            }
        });
         if (currentPageSpan) { //renewing text
            const pageNames = {
                todo: "Todo List",
                calendar: "Calendar",
                login: "Login / Register"
            };
            currentPageSpan.textContent = pageNames[page] || page;
         }
    }
    links.forEach(link => { //Clicks handlers
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            if (page) {
                setActive(page);
            }
        });
    });
    setActive("todo");
}