module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "ProductBrand",
    {
      id: { type: DataTypes.STRING, primaryKey: true },
      name: DataTypes.STRING,
    },
    {
      tableName: "products_brand",
      timestamps: false,
    }
  );

  Model.associate = (models) => {
    Model.hasMany(models.Product, {
      as: "products",
      foreignKey: "brand_id",
    });
  };

  return Model;
};
