const { User, Thought } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            const thoughtObj = {
                thoughts
            };
            return res.json(thoughtObj);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async newThought(req, res) {
        try {
            const user = await User.findOne({ username: req.body.username });
            const thought = await Thought.create(req.body);
            user.thoughts.push(thought);
            await user.save();

            return res.json(thought);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async getThought(req, res) {
        try {
            const thoughts = await Thought.findOne({ _id: req.params.thoughtId })
            const thoughtObj = {
                thoughts
            };
            return res.json(thoughtObj);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId },
                { $set: req.body },
                { new: true }
            )
            const thoughtObj = {
                thought
            };
            return res.json(thoughtObj);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId })

            res.status(200).json({ message: "Thought deleted" });

        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async newReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body }},
                { new: true }
            )

            return res.status(200).json(thought)

        } catch (error) {
            return res.status(500).json(error);
        }
    },

    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId },
                { $pull: { reactions: {reactionId: req.params.reactionId}}},
                { new: true }
            )

            return res.status(200).json(thought)

        } catch (error) {
            return res.status(500).json(error);
        }
    },
}