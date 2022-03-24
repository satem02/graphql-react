const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
} = graphql;
const bikeData = require("../mock-data.json");
const BikeType = require("./type-defs/bike-type");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        bikes: {
            type: new GraphQLList(BikeType),
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