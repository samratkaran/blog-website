import Config from "../conf/config";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  Client = new Client();
  account;

  constructor() {
    this.Client.setEndpoint(Config.appWriteUrl).setProject(
      Config.appWriteProjectID
    );
    this.account = new Account(this.Client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        this.login({email,password});
        // call another method
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error + console.log("error");
    }
  }

  async login({ email, password }) {
    try {
     return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("error while login"+ error)
    }
  }

  async getCuurentUser(){
    try {
      return await this.account.get();
      
    } catch (error) {
      console.log("Appwrite service ::getCuurentUser :: error" ,error) 
    }
    return null;
  }

  async logout(){
    try {
      await this.account.deleteSessions();
      
    } catch (error) {
      console.log("Appwrite service ::getCuurentUser :: error" ,error) 
      
    }
  }
}

const authService = new AuthService();

export default authService;

