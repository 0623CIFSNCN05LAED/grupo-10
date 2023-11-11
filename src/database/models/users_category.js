module.exports = (sequelize, DataTypes) => {
    const users_category = sequelize.define(
        "users_category",
        {
            name: DataTypes.STRING,
          
        },
        {
            tableName: "users_category",
            timestamps: false,
        }
    );

    users_category.associate = (models) => {
        users_category.belongsTo(models.users, {
          as: 'users',
          foreignKey: 'users_id',
        });
      };
    return users_category;
};
