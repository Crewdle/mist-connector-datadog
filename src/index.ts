import { datadogLogs } from '@datadog/browser-logs';

import { ILoggingConnector, LoggingConnectorEvent } from '@crewdle/web-sdk';

export class DatadogLoggingConnector implements ILoggingConnector {
  constructor(clientToken: string, site: string, env?: string, version?: string) {
    datadogLogs.init({
      clientToken,
      site,
      service: 'crewdle-sdk',
      env,
      version,
    });
  }

  public log(message: string, event: LoggingConnectorEvent): void {
    datadogLogs.logger.info(message, event);
  }

  public warn(message: string, event: LoggingConnectorEvent): void {
    datadogLogs.logger.warn(message, event);
  }

  public error(message: string, event: LoggingConnectorEvent): void {
    datadogLogs.logger.error(message, event);
  }
}
