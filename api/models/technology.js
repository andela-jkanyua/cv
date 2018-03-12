module.exports = (sequelize, DataTypes) => {
  const Technology = sequelize.define('Technology', {
    title: DataTypes.STRING,
    summary: DataTypes.STRING
  }, {})
  Technology.associate = function (models) {
    // associations can be defined here
  }
  return Technology
}
