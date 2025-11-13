import bancodados from '../config/database.js'

class ModelCachorro {
    constructor() {
        this.model = bancodados.db.define('produtos', {
            id: {
                type: bancodados.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            raça: {
                type: bancodados.db.Sequelize.STRING
            },
            idade: {
                type: bancodados.db.Sequelize.INTEGER
            }
        })
    }
}