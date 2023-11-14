module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "users",
    {
      id: { type: DataTypes.STRING, primaryKey: true },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      category_id: DataTypes.STRING,
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );

  Model.associate = (models) => {
    Model.hasMany(models.users_category, {
      as: "users_category",
      foreignKey: "category_id",
    });
  };
  return Model;
};
