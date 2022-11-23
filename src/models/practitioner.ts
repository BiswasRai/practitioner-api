'use strict';

import {
  Model,
  InferAttributes,
  CreationOptional,
  InferCreationAttributes,
  DataTypes
} from 'sequelize';

import { sequelize } from '../config/database.config';

class Practitioner extends Model<
  InferAttributes<Practitioner>,
  InferCreationAttributes<Practitioner>
> {
  declare id: CreationOptional<number>;
  declare fullName: string;
  declare email: string;
  declare contact: number;
  declare DOB: Date;
  declare workingDays: number;
  declare startTime: Date;
  declare endTime: Date;
  declare permanentAddress: string;
  declare temporaryAddress: string;
  declare isSpecialist: boolean;
  declare photo: string;
}

Practitioner.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    contact: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DOB: {
      type: DataTypes.DATE,
      allowNull: false
    },
    workingDays: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    permanentAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    temporaryAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isSpecialist: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'Practitioner'
  }
);

export default Practitioner;
