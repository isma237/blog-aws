module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');

    const Article = sequelize.define('Article', {
    // Model attributes are defined here
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    pictureUrl : {
        type: DataTypes.STRING
    }
    }, {});

    return Article;
}