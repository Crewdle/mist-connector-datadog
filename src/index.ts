import { datadogLogs } from '@datadog/browser-logs';

import type { ILoggingConnector, LoggingConnectorEvent } from '@crewdle/web-sdk';

/**
 * The Datadog logging connector - Easily log your Crewdle Mist cluster events to Datadog
 * @category Connector
 */
export class DatadogLoggingConnector implements ILoggingConnector {
  /**
   * Create a new Datadog logging connector.
   * @param clientToken The Datadog client token
   * @param site The Datadog site
   * @param env The environment
   * @param version The version
   */
  constructor(clientToken: string, site: string, env?: string, version?: string) {
    datadogLogs.init({
      clientToken,
      site,
      service: 'crewdle-sdk',
      env,
      version,
    });
  }

  /**
   * Send a log message to Datadog.
   * @param message The log message
   * @param event The event
   */
  public log(message: string, event: LoggingConnectorEvent): void {
    datadogLogs.logger.info(message, event);
  }

  /**
   * Send a warning message to Datadog.
   * @param message The warning message
   * @param event The event
   */
  public warn(message: string, event: LoggingConnectorEvent): void {
    datadogLogs.logger.warn(message, event);
  }

  /**
   * Send an error message to Datadog.
   * @param message The error message
   * @param event The event
   */
  public error(message: string, event: LoggingConnectorEvent): void {
    datadogLogs.logger.error(message, event);
  }
}
