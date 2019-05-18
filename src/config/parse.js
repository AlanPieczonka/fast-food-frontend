import Parse from 'parse'
import ENV from './env'

const { APP_ID, API_KEY, SERVER_URL } = ENV

Parse.serverURL = SERVER_URL;
Parse.initialize(
  APP_ID,
  API_KEY
);

export default Parse;