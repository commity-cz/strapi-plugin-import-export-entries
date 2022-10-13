const FakerJs = require('@faker-js/faker');

const pluginId = require('./pluginId');

const { faker } = FakerJs;

const SLUGS = {
  COLLECTION_TYPE: 'api::collection-type.collection-type',
  RELATION_A: 'api::with-relation.relation-a',
  RELATION_B: 'api::with-relation.relation-b',
  SINGLE_TYPE: 'api::single-type.single-type',
};

const generateData = (slug, customData = {}) => {
  if (slug === SLUGS.RELATION_A) {
    return {
      name: faker.company.name(),
      ...customData,
    };
  }
  if (slug === SLUGS.RELATION_B) {
    return {
      name: faker.company.name(),
      ...customData,
    };
  }

  throw new Error(`Data generation is not supported for slug ${slug}`);
};

/**
 * ServiceName.
 * @typedef {("export"|"import")} ServiceName
 */

/**
 * Get a plugin service.
 * @param {ServiceName} serviceName
 * @returns
 */
const getService = (serviceName) => {
  return strapi.plugin(pluginId).service(serviceName);
};

module.exports = {
  SLUGS,
  generateData,
  getService,
};
