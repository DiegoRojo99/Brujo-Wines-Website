//Si el usuario es admin añadir una pagina de admin a nav
function addAdmin(){
    var adminLi = document.createElement("li");
    adminLi.className="nav-item";
    adminLi.innerHTML='<a href="admin.html" class="nav-link">Admin</a>';
    document.getElementById('nav-menu').appendChild(adminLi);
}

if(false){
    addAdmin();
}