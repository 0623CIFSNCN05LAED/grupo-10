module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "MostVisitedProducts",
    {
      id: { type: DataTypes.UUID, primaryKey: true },
      visits: DataTypes.INTEGER,
      product_id: DataTypes.STRING,
    },
    {
      tableName: "most_visited_products",
      timestamps: false,
    }
  );

  Model.associate = (models) => {
    Model.belongsTo(models.Product, {
      foreignKey: "product_id",
      as: "products",
    });
  };

  return Model;
};
