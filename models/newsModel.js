const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Newz = sequelize.define(
  "newz",
  {
    news_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    titl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgs: {
      type: DataTypes.STRING,
    },
    shows: {
      type: DataTypes.STRING,
    },
    storey: {
      type: DataTypes.STRING,
    },
    dreg: {
      type: DataTypes.STRING,
    },
    categ: {
      type: DataTypes.STRING,
    },
    categ_id: {
      type: DataTypes.INTEGER,
    },
    viewz: {
      type: DataTypes.STRING,
    },
    dele: {
      type: DataTypes.STRING,
    },
    imp: {
      type: DataTypes.STRING,
    },
    breakingnews: {
      type: DataTypes.STRING,
    },
    news_expiry: {
      type: DataTypes.STRING,
    },
    impeg: {
      type: DataTypes.STRING,
    },
    skid: {
      type: DataTypes.STRING,
    },
    docklenk: {
      type: DataTypes.STRING,
    },
    typee: {
      type: DataTypes.STRING,
    },
    newsdetails: {
      type: DataTypes.STRING,
    },
    multimage: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "newz",
    timestamps: false, // If you don't have timestamps in your table
  }
);

//return News

// (async () => {
//   await sequelize.sync({ force: true });
//   console.log('Tables created!');
// })();

module.exports = Newz;
