import User from "../models/user";
import Animal from "../models/animal";
import Product from "../models/product";

const Query = {
  //me: (parent,args,context,info)=>me,
  // user: (parent,args,context,info)=>{
  //        const id = args.id
  //        const user= users.find(u => u.id === id)
  //        return user
  // },
  user: (parent, args, context, info) =>
    User.findById(args.id).populate({
      path: "products",
      populate: { path: "user" },
    }),
  users: (parent, args, context, info) =>
    User.find({}).populate({
      path: "products",
      populate: { path: "user" },
    }),

  product: (parent, args, context, info) =>
    Product.findById(args.id).populate({
      path: "user",
      populate: { path: "products" },
    }),
  products: (parent, args, context, info) =>
  Product.find({}).populate({
      path: "user",
      populate: { path: "products" },
    }),

  //  การบ้าน signUp animal
  animal: (parent, args, context, info) => Animal.findById(args.id),
  animals: (parent, args, context, info) => Animal.find({}),
};

export default Query;
