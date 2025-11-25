import bancodados from '../config/database.js'

class ModelDog {
    constructor() {
        this.model = bancodados.db.define('dog', {
            id: {
                type: bancodados.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: bancodados.db.Sequelize.STRING
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

export default new ModelDog().model