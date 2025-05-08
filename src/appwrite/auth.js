import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

//we are creating an authentication service using appwrite.
export class AuthService {
  //goal is to create an object out of this class
  client = new Client(); //client object
  account; // it can be created only by passing the context of the client object.
  // to run this we need methods .setEndpoint and .setProject.
  // Run these methods as soon as the object is created out of this class.

  constructor() {
    // constructor here calls the methods of the client object and sets the endpoint and project id.
    this.client
      //connect to service to appwrite server
      .setEndpoint(conf.appwriteUrl) // API Endpoint
      .setProject(conf.appwriteProjectId); // connect with our project using id
    this.account = new Account(this.client); //create the account manager using our configured client object.
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
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser() :: ", error);
      return null;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("appwrite service :: logout() ::", error);
      throw error;
    }
  }
}

const authService = new AuthService(); //create an object of the class

export default authService;
// advantage: export object to invoke the endpoints in constructors and it can access the methods.
