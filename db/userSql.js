var UserSQL = {
    insert: 'INSERT INTO userAccounts(username,password) VALUES(?,?)',
    queryAll: 'SELECT * FROM userAccounts',
    getUserById: 'SELECT * FROM userAccounts WHERE id = ? ',
    getUserByUsername: 'SELECT COUNT(*) FROM userAccounts WHERE username = ? ',
    isUser: 'SELECT COUNT(*) from userAccounts WHERE username = ? AND password = ?',
    getUserInfo: 'SELECT * FROM userInfo WHERE username = ?',
    getLiveInfo: 'SELECT * FROM live WHERE id= ?'
};
module.exports = UserSQL;