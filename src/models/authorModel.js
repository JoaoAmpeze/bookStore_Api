import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Books from './booksModel';

const Author = sequelize.define(
  'author',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },

    biography: {
      type: DataTypes.STRING(2000),
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

Author.belongsTo(Books , {
  as: 'books',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_book',
    name: 'idBook',
  },
});


export default Author;