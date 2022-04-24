'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Cities', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(128),
            },
            ascii: {
                allowNull: true,
                type: Sequelize.STRING(128),
            },
            alt_name: {
                allowNull: true,
                type: Sequelize.TEXT,
            },
            lat: {
                allowNull: true,
                type: Sequelize.STRING(128),
            },
            long: {
                allowNull: true,
                type: Sequelize.STRING(128),
            },
            feat_class: {
                allowNull: true,
                type: Sequelize.STRING(128),
            },
            feat_code: {
                allowNull: true,
                type: Sequelize.STRING(128),
            },
            country: {
                allowNull: true,
                type: Sequelize.STRING(128),
            },
            cc2: {
                allowNull: true,
                type: Sequelize.STRING(128),
            },
            admin1: {
                allowNull: true,
                type: Sequelize.STRING(128),
            },
            admin2: {
                allowNull: true,
                type: Sequelize.STRING(128),
            },
            admin3: {
                allowNull: true,
                type: Sequelize.STRING(128),
            },
            admin4: {
                allowNull: true,
                type: Sequelize.STRING(128),
            },
            population: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            elevation: {
                allowNull: true,
                type: Sequelize.STRING(128),
            },
            dem: {
                allowNull: true,
                type: Sequelize.STRING(128),
            },
            tz: {
                allowNull: true,
                type: Sequelize.STRING(128),
            },
            modified_at: {
                allowNull: false,
                type: Sequelize.DATEONLY,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            },
            deletedAt: {
                type: Sequelize.DATE
            }
        });


        await queryInterface.sequelize.query(`ALTER TABLE Cities ADD FULLTEXT INDEX name (name) VISIBLE;`);
    },


    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Cities');
    }
};
