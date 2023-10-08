'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Discipline', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            semester_id: {
                type: Sequelize.STRING
            },
            discipline: {
                type: Sequelize.DECIMAL
            },
            reasons: {
                type: Sequelize.STRING
            },
            date: {
                type: Sequelize.DATE
            },
            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Discipline');
    }
};