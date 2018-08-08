import * as dynogels from 'dynogels';
import * as Joi from 'joi';

const Account = dynogels.define('Account', {
  hashKey: 'email',
  timestamps: true,

  schema: {
    email: Joi.string().email(),
    username: Joi.string(),
    posts: Joi.array().items(Joi.object().keys({
      title: Joi.string(),
      url: Joi.string(),
      description: Joi.string(),
      comment: Joi.array(),
      date: Joi.string(),
      views: Joi.number(),
      score: Joi.number(),
      id: Joi.string()
    }))
  }
});

export { Account };
