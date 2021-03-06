const Sequelize = require('sequelize');

module.exports = class Label extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        color: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Label',
        tableName: 'label',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(db) {
    this.hasMany(db.issueLabel, {
      foreignKey: { name: 'labelId', allowNull: false },
      sourceKey: 'id',
    });
    this.belongsTo(db.issueTracker, {
      foreignKey: { name: 'issueTrackerId', allowNull: false },
      targetKey: 'id',
    });
  }
};
