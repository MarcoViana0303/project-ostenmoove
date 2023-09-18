import React from "react"

export default function FormCreateTool() {
    return(
        <>
    <form>
        <label for="nome">Nome da Ferramenta:</label>
        <input type="text" id="nome" name="nome" required />

        <label for="descricao">Descrição da Ferramenta:</label>
        <textarea id="descricao" name="descricao" rows="4" required></textarea>

        <label>Status da Ferramenta:</label>
        <input type="radio" id="disponivel" name="status" value="Disponível" checked />
        <label for="disponivel">Disponível</label>
        <input type="radio" id="reservado" name="status" value="Reservado" />
        <label for="reservado">Reservado</label>
        <input type="radio" id="emuso" name="status" value="Em Uso" />
        <label for="emuso">Em Uso</label>

        <label for="data_coleta">Data de Coleta:</label>
        <input type="date" id="data_coleta" name="data_coleta" required />

        <label for="data_devolucao">Data de Devolução:</label>
        <input type="date" id="data_devolucao" name="data_devolucao" />

        <label for="mecanico_reservou">Mecânico que Reservou:</label>
        <input type="text" id="mecanico_reservou" name="mecanico_reservou" />

        <button type="submit">Adicionar Ferramenta</button>
    </form>
        </>
    )
};

