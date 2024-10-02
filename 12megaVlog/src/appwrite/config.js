import { Client, Databases, ID, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  buket;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.buket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    return await this.databases.createDocument(
      conf.appWriteDataBaseId,
      conf.appWriteCollectionId,
      slug,
      {
        title,
        content,
        featuredImage,
        status,
        userId,
      }
    );
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.error("App Write Service ::  getPost :: error", error);
      return false;
    }
  }

  async getPosts(quries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        quries
      );
    } catch (error) {
      console.error("App Write Service ::  allPost :: error", error);
      return false;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    return await this.databases.updateDocument(
      conf.appWriteDataBaseId,
      conf.appWriteCollectionId,
      slug,
      {
        title,
        content,
        slug,
        featuredImage,
        status,
      }
    );
  }

  async deletePost() {
    try {
      await this.databases.deleteDocument(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("App Write service ::  deletePost :: error", error);
      return false;
    }
  }

  // file upload service

  async uploadFile(file) {
    try {
      return await this.buket.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("AppWrite Service ::   uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.buket.deleteFile(conf.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("AppWrite Service :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    try {
     return this.buket.getFilePreview(conf.appWriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite Service ::  getFilePreview :: error", error);
    }
  }
}

const service = new Service();
export default service;
