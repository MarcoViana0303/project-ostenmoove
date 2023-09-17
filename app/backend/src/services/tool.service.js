const ToolModel = require('../database/models/ToolModel');

// Listando todas as ferramentas
const getAllTools = async () => {
    const tools = await ToolModel.findAll();
    return tools;
};

// Retornando apenas uma por id
const getById = async (id) => {
    const tool = await ToolModel.findByPk(id);
    return tool;
};

// Criando uma nova ferramenta
const createTool = async (data) => {
    const newTool = await ToolModel.create(data)
    return newTool;
};

// Deletando uma ferramenta por id
const deleteById = async (id) => {
    const deletedTool = await ToolModel.destroy({
        where: {
            id: id,
        },
    });
    return deletedTool;
};

const updateToolStatus = async (id, status) => {
    try {
        const tool = await ToolModel.findByPk(id);

        if (!tool) {
            throw new Error('Ferramenta não encontrada');
        }

        tool.status = status;
        await tool.save();

        return tool;
    } catch (err) {
        throw err;
    };
};

// Reservar uma ferramenta para um mecânico por ID
const reserveTool = async (id, mechanicName) => {
    try {
        const tool = await ToolModel.findByPk(id);

        if (!tool) {
            throw new Error('Ferramenta não encontrada');
        };
        
        if (tool.status !== "Disponível") {
            throw new Error('Ferramenta já reservada ou em uso');
        }

        tool.status = "Reservado";
        tool.mecanico_reservou = mechanicName;
        await tool.save();

        return tool;
        
    } catch (err) {
        throw err
    }
};

module.exports = { 
    getAllTools, 
    getById, 
    createTool, 
    deleteById, 
    updateToolStatus };