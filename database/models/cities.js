'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class City extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    City.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(128),
        },
        ascii: {
            allowNull: true,
            type: DataTypes.STRING(128),
        },
        alt_name: {
            allowNull: true,
            type: DataTypes.STRING(128),
        },
        lat: {
            allowNull: true,
            type: DataTypes.STRING(128),
        },
        long: {
            allowNull: true,
            type: DataTypes.STRING(128),
        },
        feat_class: {
            allowNull: true,
            type: DataTypes.STRING(128),
        },
        feat_code: {
            allowNull: true,
            type: DataTypes.STRING(128),
        },
        country: {
            allowNull: true,
            type: DataTypes.STRING(128),
        },
        cc2: {
            allowNull: true,
            type: DataTypes.STRING(128),
        },
        admin1: {
            allowNull: true,
            type: DataTypes.STRING(128),
        },
        admin2: {
            allowNull: true,
            type: DataTypes.STRING(128),
        },
        admin3: {
            allowNull: true,
            type: DataTypes.STRING(128),
        },
        admin4: {
            allowNull: true,
            type: DataTypes.STRING(128),
        },
        population: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        elevation: {
            allowNull: true,
            type: DataTypes.STRING(128),
        },
        dem: {
            allowNull: true,
            type: DataTypes.STRING(128),
        },
        tz: {
            allowNull: true,
            type: DataTypes.STRING(128),
        },
        modified_at: {
            allowNull: false,
            type: DataTypes.DATEONLY,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        modelName: 'City',
        defaultScope: {
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'deletedAt']
            }
        }
    });
    return City;
};
