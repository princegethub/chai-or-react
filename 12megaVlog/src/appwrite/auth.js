import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ name, email, password }) {
    try {
      let userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //Login Method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch {
      console.error("Error creating account");
      throw error;
    }
  }

  async login({email, password}){
    try {
     return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }


  async getCurrentUser(){
    try {
      return this.account.get();
    } catch (error) {
      console.log('GetCurrentUser error: ', error);
      
    }
    return null;
  }

  async logout(){
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("App Write Service ::  logout error: ", error);
      return false
    }
  }

}

const authService = new AuthService();

export default authService;
