function responsiveSideBar(icon) {
    if (icon.matches) {
        document.getElementById("sidebarScroll").classList.add("collapse")
        document.getElementById("button-sidebar").innerHTML = `
<button id="toggler-sidebar" class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarScroll" aria-controls="sidebarScroll" aria-expanded="false" aria-label="Toggle navigation" onclick="addBorder(this.id)">
                <i class="fa fa-bars"></i>
            </button>`;
    } else {
        document.getElementById("button-sidebar").innerHTML = ``;
        document.getElementById("sidebarScroll").classList.remove("collapse");
    }
}

var side_bar = window.matchMedia("(max-width:700px)");
responsiveSideBar(side_bar);
side_bar.addListener(responsiveSideBar);