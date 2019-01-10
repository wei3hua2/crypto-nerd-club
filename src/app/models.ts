export interface CoinsDashboard {
    noOfRepositories?: {name: string, value: number}[];
}
export interface CoinDashboard {
    id: string;
}

export interface CoinListItem extends CoinBase {
    ghLogin: string;
    public_repos: number;
    avatar_url: string;

    noOfOpenIssues: number;
    noOfContris: number;
    noOfCommits7d: number;

    price: number;
    marketCap: number;
    volume: number;
    priceTimestamp: Date;

    created_at: Date;
    updated_at: Date;
}
export interface CoinBase {
    symbol: string;
    name: string;
}


// export interface RepositoryDashboard extends RepositoryBase {}

// export interface RepositoryListItem extends RepositoryBase {}

export interface RepositoryDetail extends RepositoryBase {
    full_name: string;
    description: string;
    fork: number;
    owner: Developer;
    created_at: Date;
    updated_at: Date;
    homepage: string;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    forks_count: number;
    open_issues_count: number;
    default_branch: string;

    archived: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_page: boolean;
    has_issues: boolean;

    commits: Commit[];
    issues: Issue[];
}
export interface RepositoryBase {
    id: string;
    name: string;
}
export interface Commit {
    id: string;
}
export interface Issue {
    id: string;
}
export interface License {
    id: string;
}
// export interface Event {}
// export interface Comment {}
// export interface Event {}
// export interface Release {}
// export interface Project {}
export interface Developer {
    id: string;
}


/****************** Github ******************/

export interface OrgGH {
    login: string;
    description: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    is_verified: boolean;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    avatar_url: string;

    created_at: Date;
    updated_at: Date;
}




/****************** Deprecated ******************/

// export interface CoinDashboard {
//     currency: string;
//     dayOpen: number;
//     dayVolume: number;
//     dayOpenVolume: number;
//     weekOpen: number;
//     weekVolume: number;
//     weekOpenVolume: number;
//     monthOpen: number;
//     monthVolume: number;
//     monthOpenVolume: number;
//     yearOpen: number;
//     yearVolume: number;
//     yearOpenVolume: number;
//     close: number;
//     high: number;
//     highTimestamp: Date;
//     highExchange: string;
//     highQuoteCurrency: string;
//     availableSupply: number;
//     maxSupply: number;
// }
// export interface OHLCV {
//     close: number;
//     high: number;
//     low: number;
//     open: number;
//     timestamp: Date;
//     volume: number;
// }
// export interface Global {
//     volumes: {[timestamp: number]: number};
//     marketCaps: {[timestamp: number]: number};
// }
// export interface Currency {
//     currency: string;
//     name?: string;
// }
// export interface Coin extends Currency {
//     dashboard?: CoinDashboard;
//     ohlcv?: OHLCV[];
// }
// export interface Exchange {
//     exchange: string;
//     pairs: Pair[];
// }
// export interface Pair {
//     exchange: string;
//     market: string;
//     base: string;
//     quote: string;
//     price_quote?: number;
//     timestamp?: Date;
// }
// export interface Development {
//     currency: string;
// }
