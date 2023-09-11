import { AxiosInstance } from "axios";
import apiClient from "./api-client";

export class HttpService<T>{
  protected endPoint: string;
  protected apiClient: AxiosInstance;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
    this.apiClient = apiClient;
  }

    getAll(query?: string) {
    return this.apiClient.get<{data: Array<{ id: number; attributes: T}> }>(
      `${this.endPoint}${"?" + query}`,
      {}
    );
  }

    create<P>(entity: Partial<P>){
        console.log("event",entity);
        return this.apiClient.post<T>(
            this.endPoint,
            {data: {...entity}},
        )
    }
}