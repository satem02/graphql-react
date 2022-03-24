const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const BikeType = new GraphQLObjectType({
  name: "Bike",
  fields: () => ({
    bike_id: { type: GraphQLString },
    lat: { type: graphql.GraphQLFloat },
    lon: { type: graphql.GraphQLFloat },
    is_reserved: { type: GraphQLInt },
    is_disabled: { type: GraphQLInt },
    vehicle_type: { type: GraphQLString },
    android: { type: GraphQLString },
    ios: { type: GraphQLString },
  }),
});

module.exports = BikeType;