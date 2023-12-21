module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "User",
    {
      id: { type: DataTypes.UUID, primaryKey: true },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      category_id: DataTypes.STRING,
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
      tableName: "users",
      timestamps: true,
      underscored: true,
      updatedAt: false,
    }
  );

  Model.associate = (models) => {
    Model.belongsTo(models.users_category, {
      as: "users_category",
      foreignKey: "category_id",
    });
  };
  return Model;
};
