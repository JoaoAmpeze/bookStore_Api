import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Categories from './categoriesModel';

const Books = sequelize.define(
  'books',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    price: {
      type: DataTypes.NUMERIC,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

Books.belongsTo(Categories, {
  as: 'categories',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_category',
    name: 'idCategory',
  },
});


export default Books;