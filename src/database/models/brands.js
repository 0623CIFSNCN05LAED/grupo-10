module.exports = (sequelize, DataTypes) => {
    const ProductBrand = sequelize.define(
        "ProductBrand", {
        name: DataTypes.STRING,
    },
        {
            tableName: 'products_brand',
            timestamps: false,
        }
    );

    ProductBrand.associate = (models) => {
        ProductBrand.hasMany(models.Product, {
            as: "products",
            foreignKey: "brand_id",
        });
    };

    return ProductBrand;
};
