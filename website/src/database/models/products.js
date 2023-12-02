module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Product",
    {
      id: { type: DataTypes.UUID, primaryKey: true },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      brand_id: DataTypes.STRING,
      category_id: DataTypes.STRING,
    },
    {
      tableName: "products",
      timestamps: false,
    }
  );

  Model.associate = (models) => {
    Model.belongsTo(models.ProductBrand, {
      as: "productBrand",
      foreignKey: "brand_id",
    });

    Model.belongsTo(models.ProductCategory, {
      as: "productCategory",
      foreignKey: "category_id",
    });
  };

  return Model;
};