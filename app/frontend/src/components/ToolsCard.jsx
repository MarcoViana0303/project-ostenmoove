import { useEffect, useState } from 'react'
// Falha na integração do front-end com o back-end,
// Porém com o arquivo mockado abaixo é possível renderizar as ferramentas
// import mockTools from '../../mocks/toolsMock';
import FormCreateTool from './FormCreateTool';
import axios from 'axios';

function ToolsCard() {
  const [tools, setTools] = useState([]);
  const [isForm, setIsForm] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/tools')
    .then((res) => {
      setTools(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  const handleClickDelete = (id) => {
    if (window.confirm('Tem certeza que deseja deletar a ferramenta?')) {
      const updatedTools = tools.filter((el) => el.id !== id)
      setTools(updatedTools);
      axios.delete(`http://localhost:3000/tools/${id}`)
      .then(() => {
        setTools((prevTools) => prevTools.filter((tool) => tool.id !== id));
      })
      .catch((err) => {
        console.log(err);
      })
    }
  };

  const handleAddEdit = () => {
    setIsForm(true);
  };

  const handleClickReserve = (index) => {
    const updatedTools = [...tools];
    const toolToReserve = updatedTools[index];
    
    const mechanicName = prompt('Nome do mecânico que está reservando:');
    
    if (mechanicName) {
      axios.post(`http://localhost:3000/tools/${toolToReserve.id}/reserve`, {
        mecanico_reservou: mechanicName
      })
      .then((res) => {
        console.log(res.data);
        
        toolToReserve.status = 'Reservado';
        toolToReserve.mecanico_reservou = mechanicName;
        setTools(updatedTools);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  };

  const formatDateBr = (prevFormat) => {
    const data = new Date(prevFormat);
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZoneName: 'short',
    };
    return new Intl.DateTimeFormat('pt-BR', options).format(data);
  };

  return (
    <>
      {!isForm && (
        <div className='card-container'>

          {tools.map((el, index) => (
            <div className='card' key={el.id}>
              <div>{el.status}</div>
              <div>{formatDateBr(el.data_coleta)}</div>
              <div>{formatDateBr(el.data_devolucao)}</div>
              <button className='button edit-button' onClick={handleAddEdit}>Editar</button>
              <button className='button reserve' onClick={() => handleClickReserve(index) } disabled={
                el.status == 'Reservado' || el.status == 'Em Uso'}>Reservar</button>
              <button className='button delete-button' onClick={() => handleClickDelete(el.id)}>Deletar</button>
            </div>
          ))}
          <button onClick={handleAddEdit} className='button add-button'>Adicionar</button>

        </div>
      )}

      {isForm && <FormCreateTool />}

    </>
  )
}

export default ToolsCard;
