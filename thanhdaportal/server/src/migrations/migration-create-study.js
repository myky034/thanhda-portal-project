'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Study', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            semester_id: {
                type: Sequelize.STRING
            },
            plus_point_1: {
                type: Sequelize.DECIMAL
            },
            coefficient_1: {
                type: Sequelize.DECIMAL
            },
            plus_point_2: {
                type: Sequelize.DECIMAL
            },
            coefficient_2: {
                type: Sequelize.DECIMAL
            },
            coefficient_3: {
                type: Sequelize.DECIMAL
            },
            average_score_result: {
                type: Sequelize.DECIMAL
            },
            evaluate: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Study');
    }
};