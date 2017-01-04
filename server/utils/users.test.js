const expect = require('expect');

const {Users} = require('./Users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    },{
      id: '2',
      name: 'Jen',
      room: 'React Course'
    },{
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('Should add new user', () => {
    let users = new Users();
    let user = {
      id: '123',
      name: 'Cengiz',
      room: 'Office fans'
    };

    let resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });


  it('Should remove a user', () => {
    let userId = '1';
    let user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('Should not remove user', () => {
    let userId = '99';
    let user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('Should find user', () => {
    let userId = '2';
    let user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('Should not find a user', () => {
    let userId = '99';
    let user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('Should return names for Node Courses', () => {
    let userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('Should return names for React Courses', () => {
    let userList = users.getUserList('React Course');
    expect(userList).toEqual(['Jen']);
  });
});
