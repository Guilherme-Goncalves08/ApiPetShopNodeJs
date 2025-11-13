import bancodados from '../config/database.js'

class ModelCliente {
    constructor() {
        this.model = bancodados.db.define('produtos', {
            id: {
                type: bancodados.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: bancodados.db.Sequelize.STRING
            },
            telefone: {
                type: bancodados.db.Sequelize.STRING
            }
        })
    }
}