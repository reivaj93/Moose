import React from "react";

function Nav(){

    return(
        <section>
        <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Nuestra experiencia</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Menú</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Ubicanos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Blog</a>
        </li>
        </ul>

        <img src="../../public/images/DonMooseEspacio.png" alt="DonMoose"></img>
        </section>

    

    )

}

export default Nav