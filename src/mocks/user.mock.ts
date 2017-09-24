import  {User} from "../models/user.interface";
const  userList: User[] = [
  {
    name: 'Kunta',
    company: 'Owezzy IT Solution',
    location: 'Ngong, Kenya.',
    bio: "I make videos on angular ",
    avatar_url: "http://i.imgur.com/jaV62P6.jpg",
    email: 'owezzy@gmail.com'
  },
  {
    name: 'Owezzy',
    company: 'Owezzy IT Solution',
    location: 'Karen, Kenya.',
    bio: "I make videos on React and Vue ",
    avatar_url: "http://i.imgur.com/jaV62P6.jpg",
    email: 'kungfuOwezzy@gmail.com'
  }
];

export const USER_LIST = userList;
