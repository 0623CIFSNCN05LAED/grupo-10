module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "ProductCategory",
    {
      id: { type: DataTypes.STRING, primaryKey: true },
      name: DataTypes.STRING,
    },
    {
      tableName: "products_category",
      timestamps: false, // Corrección del nombre de la opción timestamps
    }
  );

  Model.associate = (models) => {
    Model.hasMany(models.Product, {
      as: "products",
      foreignKey: "category_id",
    });
  };

  return Model;
};
