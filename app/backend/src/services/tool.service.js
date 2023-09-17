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

module.exports = { getAllTools, getById, createTool, deleteById};