# Crewdle Mist Datadog Connector

## Introduction

The Crewdle Mist Datadog Connector is designed to directly send SDK logs to your Datadog account, streamlining log management and analysis. This tool simplifies the process of monitoring and troubleshooting SDK performance by utilizing Datadog's analytics capabilities, without the need for complex configurations or additional software.

## Getting Started

Before diving in, ensure you have installed the [Crewdle Mist SDK](https://www.npmjs.com/package/@crewdle/web-sdk) and you have your Datadog client token.

## Installation

```bash
npm install @crewdle/mist-connector-datadog
```

## Usage

```TypeScript
import { DatadogLoggingConnector } from '@crewdle/mist-connector-datadog';

// Create a new SDK instance
const sdk = await SDK.getInstance('[VENDOR ID]', '[ACCESS TOKEN]', {
  loggingConnectors: [
    new DatadogLoggingConnector('[CLIENT TOKEN]', '[SITE]'),
  ],
});
```

## Need Help?

Reach out to support@crewdle.com or raise an issue in our repository for any assistance.

## Join Our Community

For an engaging discussion about your specific use cases or to connect with fellow developers, we invite you to join our Discord community. Follow this link to become a part of our vibrant group: [Join us on Discord](https://discord.gg/XJ3scBYX).
