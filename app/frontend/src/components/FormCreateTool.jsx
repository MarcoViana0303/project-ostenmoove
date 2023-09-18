import { useState } from "react";
import axios from "axios";

export default function FormCreateTool() {
    const [formData, setFormData] = useState({
        nome: "",
        descricao: "",
        status: "Disponível",
        data_coleta: "",
        data_devolucao: "",
        mecanico_reservou: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/tools', formData)
            .then((_res) => {
                window.alert('Ferramenta cadastrada com sucesso.');
            })
            .catch((err) => {
                window.alert('Falha ao cadastrar a ferramenta');
                console.log(err);
            })
    };
    return (
        <>
            <div className="card-container">
                <form onSubmit={ handleSubmit }>
                    <label htmlFor="nome">Nome da Ferramenta:</label>
                    <input type="text" id="nome"
                        name="nome" value={formData.nome} required
                        onChange={ handleInputChange }
                    />

                    <label htmlFor="descricao">Descrição da Ferramenta:</label>
                    <textarea id="descricao" name="descricao" rows="4" required></textarea>

                    <label>Status da Ferramenta:</label>
                    <input type="radio" id="disponivel" name="status" value="Disponível" checked />
                    <label htmlFor="disponivel">Disponível</label>
                    <input type="radio" id="reservado" name="status" value="Reservado" />
                    <label htmlFor="reservado">Reservado</label>
                    <input type="radio" id="emuso" name="status" value="Em Uso" />
                    <label htmlFor="emuso">Em Uso</label>

                    <label htmlFor="data_coleta">Data de Coleta:</label>
                    <input type="date" id="data_coleta" name="data_coleta" required />

                    <label htmlFor="data_devolucao">Data de Devolução:</label>
                    <input type="date" id="data_devolucao" name="data_devolucao" />

                    <label htmlFor="mecanico_reservou">Mecânico que Reservou:</label>
                    <input type="text" id="mecanico_reservou" name="mecanico_reservou" />

                    <button type="submit">Adicionar Ferramenta</button>
                </form>
            </div>
        </>
    )
}

