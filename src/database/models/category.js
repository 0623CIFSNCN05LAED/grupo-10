module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define(
        "ProductCategory", {
        name: DataTypes.STRING,
    },
        {
            tableName: 'products_category',
            timestamps: false, // Corrección del nombre de la opción timestamps
        }
    );

    ProductCategory.associate = (models) => {
        ProductCategory.hasMany(models.Product, {
            as: "products",
            foreignKey: "category_id",
        });
    };

    return ProductCategory;
};