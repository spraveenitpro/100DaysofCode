import { v4 as uuidv4 } from "uuid";
const idOne = uuidv4();
const idTwo = uuidv4();

// pseudo database
let users = {
  [idOne]: {
    id: "1",
    firstName: "Robin",
    lastName: "Wieruch",
    isDeveloper: true,
  },
  [idTwo]: {
    id: "2",
    firstName: "Dave",
    lastName: "Davddis",
    isDeveloper: false,
  },
};

const getUser = (id) =>
  new Promise((resolve, reject) => {
    const user = users[id];

    if (!user) {
      return setTimeout(() => reject(new Error("User not found")), 250);
    }

    setTimeout(() => resolve(users[id]), 250);
  });

// usage
const doGetUsers = async (id) => {
  try {
    const result = await getUser(id);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

doGetUsers("1");

const createUser = (data) =>
  new Promise((resolve, reject) => {
    if (!data.firstName || !data.lastName) {
      reject(new Error("Not all information provided"));
    }

    const id = uuidv4();
    const newUser = { id, ...data };

    users = { ...users, [id]: newUser };

    setTimeout(() => resolve(true), 250);
  });

// usage
const doCreateUser = async (data) => {
  try {
    const result = await createUser(data);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

doCreateUser({ firstName: "Liam", lastName: "Wieruch" });

const updateUser = (id, data) =>
  new Promise((resolve, reject) => {
    if (!users[id]) {
      return setTimeout(() => reject(new Error("User not found")), 250);
    }

    users[id] = { ...users[id], ...data };

    return setTimeout(() => resolve(true), 250);
  });

// usage
const doUpdateUser = async (id, data) => {
  try {
    const result = await updateUser(id, data);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

doUpdateUser("1", { isDeveloper: false });

const deleteUser = (id) =>
  new Promise((resolve, reject) => {
    const { [id]: user, ...rest } = users;

    if (!user) {
      return setTimeout(() => reject(new Error("User not found")), 250);
    }

    users = { ...rest };

    return setTimeout(() => resolve(true), 250);
  });

// usage
const doDeleteUser = async (id) => {
  try {
    const result = await deleteUser(id);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

doDeleteUser("1");
