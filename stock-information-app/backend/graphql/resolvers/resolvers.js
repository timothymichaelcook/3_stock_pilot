const { AuthenticationError } = require('apollo-server-express');
const { Portfolio } = require('../models'); 

const resolvers = {
  Query: {
    User: async () => {
      return user.find();
    },

    user: async (parent, { profileId }) => {
      return user.findOne({ _id: userId });
    },
  },

  Mutation: {
    addPortfolio: async (parent, { user, stock }) => { // Changed 'Portfolio' to 'stock' to match the argument name
      const portfolio = await Portfolio.create({ user, stock }); // Changed 'Portfolio' to 'portfolio' for consistency
      const token = signToken(portfolio);

      return { token, portfolio };
    },
    login: async (parent, { user, stock }) => { // Changed 'Portfolio' to 'stock' to match the argument name
      const portfolio = await Portfolio.findOne({ email }); // Changed 'email' to appropriate field for finding portfolio

      if (!portfolio) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await portfolio.isCorrectPassword(password); // Changed 'Portfolio' to 'portfolio' for consistency

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(portfolio);
      return { portfolio };
    },

    addStock: async (parent, { Portfolio, stock }) => { // Changed 'profileId' to 'Portfolio' for consistency
      return Portfolio.findOneAndUpdate(
        { _id: profileId },
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
