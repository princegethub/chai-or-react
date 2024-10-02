import { Client, Databases, ID, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client()
  databases;

  constructor(){
    this.client 
    .setEndpoint(conf.appWriteUrl)
    .setProject(conf.appWriteProjectId)
    this.databases = new Databases(this.client);
  }


}

const service = new Service();
export default service;
