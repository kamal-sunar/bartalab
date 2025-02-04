import bcrypt from "bcrypt";

const create_hash = async (password: string): Promise<string> => {
    const saltRounds: number = 10;
    try {
        const hashedPassword: string = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error("Error hashing password");
    }
};

const compare_hash = async (password: string, hash: string): Promise<boolean> => {
    try {
        const isMatch: boolean = await bcrypt.compare(password, hash);
        return isMatch;
    } catch (error) {
        throw new Error("Error comparing password");
    }
};

export { create_hash, compare_hash };