const {User} = require('../models');


const resolvers = {
  Query: {
    users: async () => {
    return User.find();
    },

    user: async (parent, {userId}) => {
      return User.findOne({ _id: userId });
    },
  },

  Mutation: {
    addUser: async (parent, { email, password }) => {
    const user = await User.create({ email, password });
    const token = signToken(user);

    return {token, profile: user};
    },

  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });

    if(!user) {
      throw new AuthenticationError('No user with this email found!');
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect password!');
    }

    const token = signToken(user);
    return { token, profile: user };
  },

    addStock: async (parent, { userId, stock }) => {
    return User.findOneAndUpdate(
    {_id: userId },
    {
      $addToSet: { stocks: stock },
    },
    {
      new: true,
      runValidators: true,
    }
    );
    }
  }
};

module.exports = resolvers;