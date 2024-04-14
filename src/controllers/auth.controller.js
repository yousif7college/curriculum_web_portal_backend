import generalDB from '../services/generalDB.service.js';

async function login(req, res, next) {
    try {
        const user = req.body;
        const userRes = await generalDB.getOneByColumn('email', user.email, "users");
        if (!userRes) {
            throw new Error('User not found');
        }
        if (userRes.password !== user.password) {
            throw new Error('Invalid password');
        }
        res.json(userRes);
    } catch (err) {
        console.error(`Error in login controller: ${err}`);
        next(err);
    }
}
export default {
    login
};

