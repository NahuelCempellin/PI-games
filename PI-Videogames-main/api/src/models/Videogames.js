const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogames', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    description:{
      type: DataTypes.TEXT,
      
    },
    released:{
      type: DataTypes.DATEONLY,
      
    },
    rating:{
      type: DataTypes.DECIMAL,
      
    },
    platforms:{
      type: DataTypes.ARRAY(DataTypes.STRING),
     
    },
    image:{
        type: DataTypes.STRING,
    },
   
   
  },{
    timestamps: false
  });
};