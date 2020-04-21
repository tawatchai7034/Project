import User from '../models/user'
import Animal from '../models/animal'

const Query = {
    //me: (parent,args,context,info)=>me,
    // user: (parent,args,context,info)=>{
    //        const id = args.id
    //        const user= users.find(u => u.id === id)
    //        return user
    // },
    user: (parent, args, context, info) => User.findById(args.id),
    users: (parent, args, context, info) => User.find({}),
    //  การบ้าน signUp animal
    animal: (parent, args, context, info) => Animal.findById(args.an_id),
    animals: (parent, args, context, info) => Animal.find({}),
  };

  export default Query