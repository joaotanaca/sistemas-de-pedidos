const Sequelize = require("sequelize");
const sequelize = require("../database/database.js");

const Cliente = sequelize.define("cliente", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100],
        },
    },
    salario: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999],
        },
    },
    dataNascimento: {
        allowNull: false,
        type: Sequelize.DATE(),
    },
    ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: true,
    },
});
module.exports = Cliente;
