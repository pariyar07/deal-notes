import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Satyam",
    lastName: "Pariyar",
    username: "satyam_07",
    email: "satyam@deal.com",
    password: "satyam@deal123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
