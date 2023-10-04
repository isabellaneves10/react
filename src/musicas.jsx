import React from "react";

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
                    <div class="card-music">
                        <div class="icons">
                            <img src="../imagens/edit-icon.png" alt=""/>
                            <img src="../imagens/delete-icon.png" alt=""/>
                        </div>
                        <div class="info-music">
                            <p>
                                <strong class="card-title">música:
                                </strong>
                                <input class="input-music-enable" type="text" value="Musica"/>
                            </p>
                            <p>
                                <strong class="card-title">artista:
                                </strong>
                                <input class="input-music-enable" type="text" value="Teste"/>
                            </p>
                            <p>
                                <strong class="card-title">categoria:
                                </strong>
                                <input class="input-music-enable" type="text" value="Teste"/>
                            </p>
                            <p>
                                <strong class="card-title">ano:
                                </strong>
                                <input class="input-music-enable" type="text" value="Teste"/>
                            </p>
                            <button class="btn-salvar-enable">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Musicas;
