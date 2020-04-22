import User from "../models/user";
import bycrypt from "bcryptjs";
import Animal from "../models/animal";
import Product from "../models/product";

const Mutation = {
  signUp: async (parent, args, context, info) => {
    const email = args.email.trim().toLowerCase();

    const cerrentUsers = await User.find({});
    const emailExit =
      cerrentUsers.findIndex((user) => user.email === email) > -1;

    if (emailExit) {
      throw new Error("email already exist.");
    }

    if (args.password.trim().length < 6) {
      throw new Error("Password > 6 . ");
    }

    const password = await bycrypt.hash(args.password, 10);
    return User.create({ ...args, email, password });
  },
  deleteProduct: async (parent, args, context, info) => {
    const { id } = args;
    const productId = await Product.findById(id);
    const userId = "5e99b40476229e16e86c626e";
    if (!userId) {
      throw new Error("Please login");
    }

    const user = await User.findById(userId);
    if (userId !== productId.user.toString()) {
      throw new Error("You can't resolve");
    }
    const delateProduct = await Product.findByIdAndRemove(id);
    const updateUserProduct = user.products.filter(
      (productId)=>productId.toString() !== delateProduct.id.toString()
    );
    await User.findByIdAndUpdate(userId,{products : updateUserProduct});
    return delateProduct;

    // const { id } = args;

    // // Find product from given id
    // const product = await Product.findById(id);

    // // TODO: Check if user logged in

    // // TODO: user id from request --> Find user
    // const userId = "5e99b40476229e16e86c626e";

    // // Check if user logged in
    // if (!userId) throw new Error("Please log in.");

    // const user = await User.findById(userId);

    // // Check ownership of the product
    // if (product.user.toString() !== userId) {
    //   throw new Error("Not authorized.");
    // }

    // // Delete product
    // const deletedProduct = await Product.findOneAndRemove(id);

    // // Update user's products
    // const updatedUserProducts = user.products.filter(
    //   (productId) => productId.toString() !== deletedProduct.id.toString()
    // );

    // await User.findByIdAndUpdate(userId, { products: updatedUserProducts });

    // return deletedProduct;
  },
  // update data
  upDateProsuct: async (parent, args, context, info) => {
    const { id, name, discription, price } = args;
    const product = await Product.findById(id);
    const userId = "5e99b40476229e16e86c626e";

    if (userId !== product.user.toString()) {
      throw new Error("You can't resolve");
    }
    const upDateInfo = {
      name: !!name ? name : product.name,
      discription: !!discription ? discription : product.discription,
      price: !!price ? price : product.price,
    };
    await Product.findByIdAndUpdate(id, upDateInfo);

    const upDateProduct = Product.findById(id).populate({ path: "user" });

    return upDateProduct;
  }, // update data
  // เชื่อมต่อ product กับ  user
  createProduct: async (parent, args, context, info) => {
    const userId = "5e99b40476229e16e86c626e";
    if (!args.name || !args.discription || !args.price) {
      throw new Error("Plaese enter name,discription,price");
    }
    const product = await Product.create({ ...args, user: userId });
    const user = await User.findById(userId);
    if (!user.products) {
      user.products = [product];
    } else {
      user.products.push(product);
    }
    await user.save();
    return Product.findById(product.id).populate({
      path: "user",
      populate: { path: "products" },
    });
  }, // เชื่อมต่อ product กับ  user
  // การบ้าน sign animal
  animalSign: async (parent, args, context, info) => {
    const an_name = args.an_name;
    const an_age = args.an_age;
    const an_discription = args.an_discription;
    const an_price = args.an_price;
    const minAnimalAge = 2;
    const minAnimalPrice = 150.25;
    const maxAnimalPrice = 20000.63;

    const cerrentAnimals = await Animal.find({});
    const An_nameExist =
      cerrentAnimals.findIndex((animal) => animal.an_name === an_name) > -1;

    if (An_nameExist) {
      throw new Error("ชื่อซ้ำอีดอก!!!");
    }

    // if (args.password.trim().length < 6) {
    //   throw new Error("Password > 6 . ");
    // }

    // const password = await bycrypt.hash(args.password, 10);
    if (args.an_age <= minAnimalAge) {
      throw new Error("`กูไม่ขาย");
    }
    if (args.an_price <= minAnimalPrice) {
      throw new Error("ถูกไปอีสั**");
    }
    if (args.an_price >= maxAnimalPrice) {
      throw new Error("ขายให้**ม่ มึงสิ");
    }
    //จบการบ้าน signUp animal
    return Animal.create({
      ...args,
      an_name,
      an_age,
      an_discription,
      an_price,
    });
  }, // การบ้าน sign animal
};

export default Mutation;
