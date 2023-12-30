'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('School_Year_Summary', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            teacher_class_id: {
                type: Sequelize.STRING
            },
            student_id: {
                type: Sequelize.STRING
            },
            discipline_point: {
                type: Sequelize.DECIMAL
            },
            discipline_classification: {
                type: Sequelize.STRING
            },
            semester_average_1: {
                type: Sequelize.DECIMAL
            },
            semester_average_2: {
                type: Sequelize.DECIMAL
            },
            average_score_result: {
                type: Sequelize.DECIMAL
            },
            result_of_classification: {
                type: Sequelize.STRING
            },
            new_class: {
                type: Sequelize.STRING
            },
            old_class: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('School_Year_Summary');
    }
};