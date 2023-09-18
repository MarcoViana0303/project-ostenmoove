const mockTools = [
    {
      id: 1,
      nome: 'Chave de Fenda',
      descricao: 'Uma ferramenta manual usada para apertar ou soltar parafusos com ranhuras.',
      status: 'Disponível',
      data_coleta: '2023-09-25T10:00:00Z',
      data_devolucao: '2023-09-30T14:30:00Z',
      mecanico_reservou: 'João da Silva',
    },
    {
      id: 2,
      nome: 'Furadeira',
      descricao: 'Uma ferramenta elétrica usada para fazer furos em superfícies.',
      status: 'Reservado',
      data_coleta: '2023-09-20T09:30:00Z',
      data_devolucao: '2023-09-25T13:15:00Z',
      mecanico_reservou: 'Maria Souza',
    },
    {
      id: 3,
      nome: 'Serra Circular',
      descricao: 'Uma ferramenta elétrica usada para cortar materiais como madeira e metal.',
      status: 'Em Uso',
      data_coleta: '2023-09-15T14:45:00Z',
      data_devolucao: null,
      mecanico_reservou: 'Carlos Ferreira',
    },
  ];
  
export default mockTools;
  