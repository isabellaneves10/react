import React from "react";
import ItemMusica from "./components/ItemMusica";

function Musicas() {
    return (
        <>
            <div class="container">
                <div class="filter">
                    <button class="btn">Adicionar</button>
                </div>
            </div>
            <div class="container">
                <div class="music-boxes">
                   <ItemMusica />
                   <ItemMusica />
                   <ItemMusica />
                   <ItemMusica />
                   <ItemMusica />
                   <ItemMusica />
                </div>
            </div>
        </>
    )
}
export default Musicas;
