'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Teacher_Classes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            class_id: {
                type: Sequelize.STRING
            },
            glv_1_id: {
                type: Sequelize.STRING
            },
            glv_2_id: {
                type: Sequelize.STRING
            },
            glv_3_id: {
                type: Sequelize.STRING
            },
            school_year: {
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
        await queryInterface.dropTable('Teacher_Classes');
    }
};