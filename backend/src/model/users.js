import bancodados from '../config/database.js'

class User {
    constructor() {
        this.model = bancodados.db.define('users', {
            id: {
                type: bancodados.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: bancodados.db.Sequelize.STRING
            },
            email: {
                type: bancodados.db.Sequelize.STRING
            }, 
            senha: {
                type: bancodados.db.Sequelize.STRING
            },
            ativo: {
                type: bancodados.db.Sequelize.BOOLEAN
            },
            permissao: {
                // recomendo usar ENUM
                type: bancodados.db.Sequelize.INTEGER
            }
        })
    }
}

export default new User().model