import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

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



export default Author;