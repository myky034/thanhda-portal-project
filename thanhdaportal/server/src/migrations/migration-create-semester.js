'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Semesters', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            school_year_summary_id: {
                type: Sequelize.STRING
            },
            semester_name: {
                type: Sequelize.STRING
            },
            discipline_point: {
                type: Sequelize.DECIMAL
            },
            discipline_classification: {
                type: Sequelize.STRING
            },
            diligence: {
                type: Sequelize.DECIMAL
            },
            academic_average: {
                type: Sequelize.DECIMAL
            },
            average_score_result: {
                type: Sequelize.DECIMAL
            },
            result_of_classification: {
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
        await queryInterface.dropTable('Semesters');
    }
};