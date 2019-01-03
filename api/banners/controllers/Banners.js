'use strict';

/**
 * Banners.js controller
 *
 * @description: A set of functions called "actions" for managing `Banners`.
 */

module.exports = {

  /**
   * Retrieve banners records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.banners.search(ctx.query);
    } else {
      return strapi.services.banners.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a banners record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.banners.fetch(ctx.params);
  },

  /**
   * Count banners records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.banners.count(ctx.query);
  },

  /**
   * Create a/an banners record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.banners.add(ctx.request.body);
  },

  /**
   * Update a/an banners record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.banners.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an banners record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.banners.remove(ctx.params);
  }
};
