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
},

async updateUser(req, res) {
    try {
        const user = await User.findOneAndUpdate({_id: req.params.userId},
            {$set: req.body},
            {new: true}
        )
        const userObj = {
            user
        };
        return res.json(userObj);
    
    } catch (error) {
        return res.status(500).json(error);
    }
},

async deleteUser(req, res) {
    try {
        const user = await User.findOneAndDelete({_id: req.params.userId})

        res.status(200).json({message: "User deleted"});
    
    } catch (error) {
        return res.status(500).json(error);
    }
},

async addFriend(req, res) {
    try {
        const user = await User.findOneAndUpdate({_id: req.params.userId},
            { $addToSet: { friends: req.params.friendId}},
            {new: true}
        )

        res.status(200).json(user);
    
    } catch (error) {
        return res.status(500).json(error);
    }
},

async deleteFriend(req, res) {
    try {
        const user = await User.findOneAndUpdate({_id: req.params.userId},
            { $pull: { friends: req.params.friendId}},
            {new: true}
        )

        res.status(200).json(user);
    
    } catch (error) {
        return res.status(500).json(error);
    }
},
}