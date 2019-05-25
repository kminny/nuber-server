"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var resolvers = {
    Subscription: {
        DriversSubscription: {
            subscribe: graphql_yoga_1.withFilter(function (_, __, _a) {
                var pubSub = _a.pubSub;
                return pubSub.asyncIterator("driverUpdate");
            }, // DriverUpdate 채널
            function (payload, _, _a) {
                var context = _a.context;
                var user = context.currentUser;
                var _b = payload.DriversSubscription, driverLastLat = _b.lastLat, driverLastLng = _b.lastLng;
                var userLastLat = user.lastLat, userLastLng = user.lastLng;
                return (driverLastLat >= userLastLat - 0.05 &&
                    driverLastLat <= userLastLat + 0.05 &&
                    driverLastLng >= userLastLng - 0.05 &&
                    driverLastLng <= userLastLng + 0.05);
            })
            /*
            subscribe: (_, __, { pubSub }) => {
              return pubSub.asyncIterator("driverUpdate");
            
            }
            */
        }
    }
};
exports.default = resolvers;
//# sourceMappingURL=DriversSubscription.resolvers.js.map