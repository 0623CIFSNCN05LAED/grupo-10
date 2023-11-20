module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "users_category",
    {
      id: { type: DataTypes.STRING, primaryKey: true },
      name: DataTypes.STRING,
    },
    {
      tableName: "users_category",
      timestamps: false,
    }
  );

  Model.associate = (models) => {
    Model.hasMany(models.User, {
      as: "users",
      foreignKey: "category_id",
    });
  };
  return Model;
};
