const { getAllTools, getById, createTool, deleteById, reserveTool, updateToolStatus } = require('../services/tool.service');

const listAllTools = async (_req, res) => {
    try {
        const tools = await getAllTools();
        res.status(200).json(tools);
    } catch (err) {
        res.status(500).json({ err: 'Erro ao listar ferramentas.'});
    };
};

const listToolById = async (req, res) => {
    const { id } = req.params;
    try {
        const tool = await getById(id);
        if (tool) {
            res.status(200).json(tool);
        } else {
            res.status(404).json({ message: 'Ferramenta não encontrada.'});
        }

    } catch (err) {
        res.status(500).json({ err: 'Erro ao buscar ferramenta por id.'});
    }
};

const createNewTool = async (req, res) => {
    console.log(req.body);
    const toolData = req.body;
    try {
        const newTool = await createTool(toolData);
        res.status(201).json(newTool);
    } catch (err) {
        res.status(500).json({ err: 'Erro ao criar uma nova ferramenta.' });
    }
};

const deleteToolById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTool = await deleteById(id);
        if (deletedTool === 1) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Ferramenta não encontrada para exclusão.' });
        }
    } catch (err) {
        res.status(500).json({ err: 'Erro ao excluir a ferramenta por id.'})
    };
};

const updateToolsStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const updateTool = await updateToolStatus(id, status);
        res.status(200).json(updateTool);

    } catch (err) {
        res.status(500).json({ err: err.message });
    };
};

const reserveTools = async (req, res) => {
    try {
        const { id } = req.params;
        const { mecanico_reservou } = req.body;

        const reservedTool = await reserveTool(id, mecanico_reservou);
        res.status(200).json(reservedTool);
    } catch (err) {
        res.status(500).json({ err: err.message });
    };
};

module.exports = { 
    listAllTools, 
    listToolById, 
    createNewTool, 
    deleteToolById, 
    reserveTools,
    updateToolsStatus,
};