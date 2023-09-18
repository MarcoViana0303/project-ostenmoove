import { useState } from 'react'
import mockTools from '../../mocks/toolsMock';
import FormCreateTool from './FormCreateTool';

function ToolsCard() {
  const [tools, setTools] = useState(mockTools);
  const [isForm, setIsForm] = useState(false);

  const handleClickDelete = (id) => {
    if(window.confirm('Tem certeza que deseja deletar a ferramenta?')) {
      const updatedTools = tools.filter((el) => el.id !== id)
      setTools(updatedTools);
    };
  };

  const handleClickAdd = () => {
    setIsForm(true);
  }


  return (
    <> 
      { !isForm && (
        <div className='card-container'>

        {tools.map((el) => (
          <div className='card' key={ el.id }>
          <div>{ el.status }</div>
          <div>{ el.data_coleta }</div>
          <div>{ el.data_devolucao }</div>
          <button className='button edit-button'>Editar</button>
          <button className='button reserve' disabled={ 
            el.status == 'Reservado' || el.status =='Em Uso'}>Reservar</button>
          <button className='button delete-button' onClick={ () => handleClickDelete(el.id) }>Deletar</button>
          </div>
       ))}
     <button onClick={ handleClickAdd } className='button add-button'>Adicionar</button>
  
      </div>
      )}
      
    { isForm && <FormCreateTool /> }

    </>
  )
}

export default ToolsCard;
