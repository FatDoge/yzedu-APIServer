var UserSQL = {
    insert: 'INSERT INTO userAccounts(username,password) VALUES(?,?)',
    queryAll: 'SELECT * FROM userAccounts',
    getUserById: 'SELECT * FROM userAccounts WHERE id = ? ',
    getUserByUsername: 'SELECT COUNT(*) FROM userAccounts WHERE username = ? ',
    isUser: 'SELECT COUNT(*) from userAccounts WHERE username = ? AND password = ?',
    getUserInfo: 'SELECT * FROM userInfo WHERE username = ?',

    isLessonInfo: 'SELECT COUNT(*) FROM lessonInfo WHERE id = ?',
    getLessonInfo: 'SELECT * FROM lessonInfo WHERE id = ?',

    isLive: 'SELECT COUNT(*) FROM live WHERE id = ?',
    getLive: 'SELECT * FROM live WHERE id = ?',
    
    isSclass: 'SELECT COUNT(*) FROM Sclass_list WHERE id = ?', 
    getSclass: 'SELECT * FROM Sclass_list WHERE id = ?', 
};
module.exports = UserSQL;