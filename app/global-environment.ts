// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare var ENVIRONMENT: string;
declare var BASE_URL: string;
declare var API_PATH: string;

interface GlobalEnvironment {
    ENVIRONMENT;
    BASE_URL;
    API_PATH;
}