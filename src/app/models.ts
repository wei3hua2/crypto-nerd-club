
export class Settings {
    nomics_api_key: string;
}

export interface CoinDashboard {
    currency: string;
    dayOpen: number;
    dayVolume: number;
    dayOpenVolume: number;
    weekOpen: number;
    weekVolume: number;
    weekOpenVolume: number;
    monthOpen: number;
    monthVolume: number;
    monthOpenVolume: number;
    yearOpen: number;
    yearVolume: number;
    yearOpenVolume: number;
    close: number;
    high: number;
    highTimestamp: Date;
    highExchange: string;
    highQuoteCurrency: string;
    availableSupply: number;
    maxSupply: number;
}

export interface OHLCV {
    close: number;
    high: number;
    low: number;
    open: number;
    timestamp: Date;
    volume: number;
}

export interface Global {
    volumes: {[timestamp: number]: number};
    marketCaps: {[timestamp: number]: number};
}

export interface Currency {
    currency: string;
    name?: string;
}

export interface Coin extends Currency {
    dashboard?: CoinDashboard; //maybe summary
    ohlcv?: OHLCV[];
}

export interface Exchange {
    exchange: string;
    pairs: Pair[];
}
export interface Pair {
    exchange: string;
    market: string;
    base: string;
    quote: string;
    price_quote?: number;
    timestamp?: Date;
}