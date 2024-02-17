
import Conf from "../conf/conf";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  Client = new Client();
  Databases;
  bucket;

  constructor() {
    this.Client.setEndpoint(Conf.appWriteUrl).setProject(
      Conf.appWriteProjectID
    );
    this.Databases = new Databases(this.Client);
    this.bucket = new Storage(this.Client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.Databases.createDocument(
        Conf.appWriteDatabaseID,
        Conf.appWriteCollectionID,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("error" + error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.Databases.updateDocument(
        Conf.appWriteDatabaseID,
        Conf.appWriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("error" + error);
    }
  }

  async deletePost(slug) {
    try {
      await this.Databases.deleteDocument(
        Conf.appWriteDatabaseID,
        Conf.appWriteCollectionID,
        slug
      );
      return true;
    } catch (error) {
      console.log("error" + error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.Databases.getDocument(
        Conf.appWriteDatabaseID,
        Conf.appWriteCollectionID,
        slug
      );
    } catch (error) {
      console.log("error" + error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.Databases.listDocuments(
        Conf.appWriteDatabaseID,
        Conf.appWriteCollectionID,
        queries
      );
    } catch (error) {
      console.log("Error gettiing" + error);
    }
  }

  // file upload methods

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(Conf.appWriteBucketID, ID.unique(),
      file
      
      );
    } catch (error) {
      console.log(error + "error uploading file");
    }
  }

  async deleteFile(fileIId){

    try {

      await this.bucket.deleteFile(
        Conf.appWriteBucketID,
        fileIId

      )
      return true;
      
    } catch (error) {
      console.log("error"+ error)
      
    }

  }

  getFilePreview(fileIId){
    return this.bucket.getFilePreview(
      Conf.appWriteBucketID,
      fileIId
    )
  }


}

const service = new Service();

export default service;
