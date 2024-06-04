const { ObjectId } = require('mongoose').Types;
const { User, Thought} = require('../models');



module.exports = {
async getUsers(req, res) {
    try {
        const users = await User.find();
        const userObj = {
            users
        };
        return res.json(userObj);
    } catch (error) {
        return res.status(500).json(error);
    }
},
async getUser(req, res) {
    try {
        const user = await User.findOne({_id: req.params.userId})
        
        const userObj = {
            user
        };
        return res.json(userObj);
    
    } catch (error) {
        return res.status(500).json(error);
    }
},

async createUser(req, res) {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
      }
}
}