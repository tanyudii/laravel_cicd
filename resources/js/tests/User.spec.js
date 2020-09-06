import User from '../classes/User';

describe('User.js', () =>{
    test('getEmail', () => {
        expect(User.getEmail()).toBe('y.hertanto17@gmail.com');
    })
});
