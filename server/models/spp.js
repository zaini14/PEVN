'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Siswa}) {
      // define association here
      this.belongsTo(Siswa, {foreignKey: 'userId', as: 'siswa',  onDelete: 'cascade', hooks: true})
    }
  };
  Spp.init({
    bulan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tahun: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nominal: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    isPay: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'spps',
    modelName: 'Spp',
  });
  return Spp;
};