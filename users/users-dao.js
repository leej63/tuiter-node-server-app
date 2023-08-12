import usersModel from "./users-model.js";


export const findAllUsers = () =>
    usersModel.find();


export const findUserById = (id) => 
    usersModel.findById(id);

// export const findUserByIndex = (uid) => {
//     if (uid - 1 !== -1) return null;
//     const index = users[uid - 1];
//     return index;
// };

export const findUserByUsername = (username) =>
    usersModel.findOne({ username });

export const findUserByCredentials = (username, password) =>
    usersModel.findOne({ username, password });

export const createUser = (user) =>
    usersModel.create(user);

export const updateUser = (id, user) =>
    usersModel.updateOne({ _id: id }, { $set: user });

export const deleteUser = (uid) =>
    usersModel.deleteOne({ _id: id });
