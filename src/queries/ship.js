import {
    gql
} from 'apollo-boost';

const GET_SHIP_QUERY = gql`
    query($id: ID!) {
        ship(id: $id) {
        id
        class
        attempted_landings
        active
        abs
        url
        model
        name
        roles
        speed_kn
        status
        type
        successful_landings
        missions {
            flight
            name
        }
        image
        home_port
        course_deg
        weight_kg
        }
    }
`;

export default GET_SHIP_QUERY;