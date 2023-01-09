const sequelize = require('../db')
const {DataTypes, Sequelize} = require('sequelize')

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    post: {type: DataTypes.STRING, allowNull: true},
    company: {type: DataTypes.STRING, allowNull: true},
    text: {type: DataTypes.STRING, allowNull: false}
})

module.exports = {
    Comment
}
