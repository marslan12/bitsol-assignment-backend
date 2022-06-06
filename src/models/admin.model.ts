import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface AdminDocument extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<Boolean>;
}

const adminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
},
{
    timestamps: true,
});

adminSchema.pre("save", async function (next) {
    let admin = this as AdminDocument;

    const salt = await bcrypt.genSalt(config.get<number>("salt"));
    const hash = await bcrypt.hashSync(admin.password, salt);

    admin.password = hash;

    return next();
});

adminSchema.methods.comparePassword = async function (
    candidatePassword: string
): Promise<boolean> {
    const admin = this as AdminDocument;

    return bcrypt.compare(candidatePassword, admin.password).catch((e) => false);
};

const AdminModel = mongoose.model<AdminDocument>("Admin", adminSchema);

export default AdminModel;
