// user store
//    purpose: store relevant data on lists of users

var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var _users = {};

var UserStore = new Store(Dispatcher);

UserStore.all = function() {
  var users = []
  Object.keys(_users).forEach(function(userId){
    users.push(_users[userId]);
  });
  return users;
};

UserStore.find = function(id) {
  return _users[id];
};

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'RECEIVE_USERS':
      resetUsers(payload.users);
      UserStore.__emitChange();
      break;
    case 'RECEIVE_USER':
      addUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

var resetUsers = function(users) {
  var newUsers = {};
  users.forEach(function(user) {
    newUsers[user.id] = user;
  });
  _users = newUsers;
};

var addUser = function(user) {
  _users[user.id] = user;
};


module.exports = UserStore;
