const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLString
} = graphql;
const bikeData = require("../mock-data.json");
const VehicleStatusType  = require("./type-defs/vehicle-status-type");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        bikes: {
            type: new GraphQLList(VehicleStatusType),
            args: { bike_id: { type: GraphQLString } },
            resolve(parent, args) {
                var bikeId = args.bike_id;
                if (bikeId)
                    return bikeData?.data?.bikes?.filter(x => x.bike_id == bikeId);

                return bikeData?.data?.bikes;
            },
        }
    },
});


module.exports = new GraphQLSchema({ query: RootQuery });