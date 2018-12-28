export const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || 'https://jabber-jaw-server.herokuapp.com/api';


const tokenUrl = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/2fc4afe9-9702-4b70-97b3-eb2c96b9ed53/token";
const instanceLocator = "v1:us1:2fc4afe9-9702-4b70-97b3-eb2c96b9ed53";

const securityKey = "f4e67ae4-25ae-4dcb-9f27-803df066ea08:5AajcotVkhQiUWF1/taPZFiGN4xE+laC7iZgMP33IDU=";

export { tokenUrl, instanceLocator, securityKey }

