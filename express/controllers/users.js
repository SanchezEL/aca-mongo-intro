const { UsersModel } = require('../../mongo/models')

const defaultUser = {
  name: 'Ted',
  age: '24'
}

const getAll = () => {
  return UsersModel.find({})
}

const getOne = (name) => {
  return UsersModel.find({name: name})
}

const createDefault = () => {
  // insert default user into db
  return UsersModel.create(defaultUser)
}

const createUser = (user) => {
  // insert user from POST request into db
  return UsersModel.create(user)
}

const updateUser = (name, updates) => {
  // use name as the query and updates for the updates
  return UsersModel.find({name: name}).updateOne(updates)
}

const deleteUser = (name) => {
  // use name as the query 

  return UsersModel.findOneAndDelete({name: name})
}

module.exports = {
  getAll,
  getOne,
  createDefault,
  createUser,
  updateUser,
  deleteUser
}