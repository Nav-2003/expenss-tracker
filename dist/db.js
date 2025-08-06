import mongoose, { Model, model } from "mongoose";
const Schema = mongoose.Schema;
const user = new Schema({
    email: String,
    name: String,
    password: String
});
const expense = new Schema({
    id: Schema.Types.ObjectId,
    electronic: Number || null,
    cloth: Number || null,
    health: Number || null,
    grocery: Number || null,
    education: Number || null
}, { strict: false });
const UserModel = mongoose.model('users', user);
const ExpensModel = mongoose.model('expenses', expense);
export { UserModel, ExpensModel };
//# sourceMappingURL=db.js.map