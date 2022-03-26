const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const VehicleStatus  = new GraphQLObjectType({
  name: "VehicleStatus",
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

module.exports = VehicleStatus ;