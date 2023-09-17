const { getAllTools, getById, createTool, deleteById } = require('../services/tool.service');

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

module.exports = { listAllTools, listToolById, createNewTool, deleteToolById };