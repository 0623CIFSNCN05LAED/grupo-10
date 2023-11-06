module.exports = (sequelize, Datatypes)=>{
    const Model =   sequelize.define(
        "Products", {
            name: Datatypes.STRING,
            price: Datatypes.DECIMAL, 
            description: Datatypes.STRING, 
            
        },
        {
            tableName: 'products', 
            timestamps: false, // Deshabilita las marcas de tiempo (created_at y updated_at)         
                    
        }
    )

    return Model;
};