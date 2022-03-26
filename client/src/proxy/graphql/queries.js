import { gql } from "@apollo/client";

export const LOAD_BIKES = gql`
  query ($bike_id : String) {
    bikes( bike_id : $bike_id) {
        bike_id
        lat
        lon
        is_reserved
        is_disabled
        vehicle_type
        android
        ios
      }
  }
`;