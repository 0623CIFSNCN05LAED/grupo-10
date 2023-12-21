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
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
      tableName: "products",
      timestamps: true,
      underscored: true,
      updatedAt: false,
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

    Model.hasOne(models.MostVisitedProducts, {
      as: "mostVisitedProducts",
      foreignKey: "product_id",
    });
  };

  return Model;
};
