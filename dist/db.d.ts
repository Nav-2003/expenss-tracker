import mongoose from "mongoose";
declare const UserModel: mongoose.Model<{
    email?: string | null;
    name?: string | null;
    password?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    email?: string | null;
    name?: string | null;
    password?: string | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    email?: string | null;
    name?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email?: string | null;
    name?: string | null;
    password?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    email?: string | null;
    name?: string | null;
    password?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    email?: string | null;
    name?: string | null;
    password?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
declare const ExpensModel: mongoose.Model<{
    id?: mongoose.Types.ObjectId | null;
    electronic?: number | null;
    cloth?: number | null;
    health?: number | null;
    grocery?: number | null;
    education?: number | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    id?: mongoose.Types.ObjectId | null;
    electronic?: number | null;
    cloth?: number | null;
    health?: number | null;
    grocery?: number | null;
    education?: number | null;
}, {}, {
    strict: false;
}> & {
    id?: mongoose.Types.ObjectId | null;
    electronic?: number | null;
    cloth?: number | null;
    health?: number | null;
    grocery?: number | null;
    education?: number | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    id?: mongoose.Types.ObjectId | null;
    electronic?: number | null;
    cloth?: number | null;
    health?: number | null;
    grocery?: number | null;
    education?: number | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    id?: mongoose.Types.ObjectId | null;
    electronic?: number | null;
    cloth?: number | null;
    health?: number | null;
    grocery?: number | null;
    education?: number | null;
}>, {}, mongoose.ResolveSchemaOptions<{
    strict: false;
}>> & mongoose.FlatRecord<{
    id?: mongoose.Types.ObjectId | null;
    electronic?: number | null;
    cloth?: number | null;
    health?: number | null;
    grocery?: number | null;
    education?: number | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export { UserModel, ExpensModel };
//# sourceMappingURL=db.d.ts.map