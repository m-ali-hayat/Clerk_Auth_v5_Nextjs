"use server";

import User from "@/modals/user.modal";
import { connect } from "@/dbConfig/db";

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log("Error from the action file :: ", error);
  }
}
