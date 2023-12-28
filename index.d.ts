import TransportStream from "winston-transport";


declare class LokiTransport extends TransportStream {

    constructor(opts: LokiTransport.LokiTransportOptions);
    flush(): Promise<null>;
}

export = LokiTransport;

declare namespace LokiTransport {

  export interface LokiTransportOptions extends TransportStream.TransportStreamOptions{
    host: string;
    basicAuth?: string;
    headers?: object;
    interval?: number;
    json?: boolean;
    batching?: boolean;
    labels?: object;
    clearOnError?: boolean,
    replaceTimestamp?: boolean,
    gracefulShutdown?: boolean,
    timeout?: number,
    onConnectionError?(error: unknown): void
  }
}