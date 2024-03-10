import { ILoggingConnector, LoggingConnectorEvent } from '@crewdle/web-sdk';
/**
 * The Datadog logging connector - Easily log your Crewdle Mist cluster events to Datadog
 * @category Connector
 */
export declare class DatadogLoggingConnector implements ILoggingConnector {
    /**
     * Create a new Datadog logging connector.
     * @param clientToken The Datadog client token
     * @param site The Datadog site
     * @param env The environment
     * @param version The version
     */
    constructor(clientToken: string, site: string, env?: string, version?: string);
    /**
     * Send a log message to Datadog.
     * @param message The log message
     * @param event The event
     */
    log(message: string, event: LoggingConnectorEvent): void;
    /**
     * Send a warning message to Datadog.
     * @param message The warning message
     * @param event The event
     */
    warn(message: string, event: LoggingConnectorEvent): void;
    /**
     * Send an error message to Datadog.
     * @param message The error message
     * @param event The event
     */
    error(message: string, event: LoggingConnectorEvent): void;
}
