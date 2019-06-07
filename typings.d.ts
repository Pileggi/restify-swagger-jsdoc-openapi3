declare module 'swagger-jsdoc' {
    namespace swaggerJSDoc {
        interface options {
            swaggerDefinition: optionsDefinition;
            apis: string[];
            components?: {[key: string]: any};
            paths?: {[key: string]: string};
        }

        interface optionsDefinition {
            info: optionsDefinitionInfo;
            servers: optionsDefinitionServer[];
            tags?: {name: string, description: string}[];
            openapi?: string;
        }

        interface optionsDefinitionInfo {
            title: string;
            version: string;
            description?: string;
        }

        interface optionsDefinitionServer {
            url: string;
        }
    }
    function swaggerJSDoc(options: swaggerJSDoc.options): swaggerJSDoc.options;
    export = swaggerJSDoc;
}
