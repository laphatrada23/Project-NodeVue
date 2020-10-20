module.exports = (sequelize, DataTypes) => {
    const Queue = sequelize.define('Queue', {
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        appointment_date: DataTypes.STRING,
        appointment_time: DataTypes.STRING,
        tel: DataTypes.STRING,
        
    })
   
    return Queue
}