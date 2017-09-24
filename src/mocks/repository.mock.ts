import {Repository} from "../models/repository.interface";
import {USER_LIST} from "./user.mock";

const  repositoryList: Repository[] = [
  {
    name: 'Ionic 3 Camera',
    description: "This repositor shows the usage of the camera utility within ionic 3",
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 SMS',
    description: "This repositor shows the usage of the SMS utility within ionic 3",
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 Multimedia',
    description: "This repositor shows the usage of the camera utility within ionic 3",
    owner: USER_LIST[1]
  },{
    name: 'Ionic 3 Speaker',
    description: "This repositor shows the usage of the camera utility within ionic 3",
    owner: USER_LIST[0]
  }
];

export const REPOSITORY_LIST = repositoryList;
