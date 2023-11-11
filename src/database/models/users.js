module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define(
        "users",
        {
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            avatar: DataTypes.STRING,
        },
        {
            tableName: "users",
            timestamps: false,
        }
    );

    users.associate = (models) => {
        users.hasMany(models.users_category, {
          as: 'users_category',
          foreignKey: 'users_id',
        });
      };
    return users;
};

