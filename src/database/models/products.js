module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        "Product", {
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        description: DataTypes.STRING,
    },
        {
            tableName: 'products',
            timestamps: false,
        }
    );

    Product.associate = (models) => {
        Product.belongsTo(models.ProductBrand, {
            as: "productBrand",
            foreignKey: "brand_id",
        });

        Product.belongsTo(models.ProductCategory, {
            as: "productCategory",
            foreignKey: "category_id",
        });
    };

    return Product;
};


