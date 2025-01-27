import { Args } from './types/common';
import { Cluster } from './Cluster';
import { IOutput } from './Output';
import 'isomorphic-fetch';
import { RC } from './index';
export declare class Environment {
  sharedClusters: string[];
  clusterEndpointMap: {
    [key: string]: string;
  };
  args: Args | undefined;
  activeCluster: Cluster | undefined;
  globalRC: RC;
  clusters: Cluster[] | undefined;
  out: IOutput;
  home: string;
  rcPath: string;
  clustersFetched: boolean;
  version?: string;
  constructor(home: string, out?: IOutput, version?: string);
  private _getClusters;
  load(): Promise<void>;
  get cloudSessionKey(): string | undefined;
  renewToken(): Promise<void>;
  fetchClusters(): Promise<void>;
  clusterByName(name: string, throws?: boolean): Cluster | undefined;
  setToken(token: string | undefined): void;
  addCluster(cluster: Cluster): void;
  removeCluster(name: string): void;
  saveGlobalRC(): void;
  setActiveCluster(cluster: Cluster): void;
  loadGlobalRC(): Promise<void>;
  parseGlobalRC(globalFile?: string): Promise<void>;
  private loadYaml;
  private initClusters;
  private getSharedClusters;
  private getLocalClusterConfig;
  private requestCloudApi;
}
export declare const isLocal: (hostname: any) => any;
