//const server = require('./src/server.js');
//server();
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('PblDB', 'gz', '1001010101', {
    dialect: 'mariadb',
    dialectOptions: { connectTimeout: 1000 } // mariadb connector option
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


class User extends Model { }
User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'User',
    freezeTableName: true
});


const run = async () => {
    await sequelize.sync({ force: true });

    const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
    console.log("Jane's auto-generated ID:", jane.id);
}
run();
