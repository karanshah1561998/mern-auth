import jwt from "jsonwebtoken";

export const generateVerificationToken = () => Math.floor(100000 + Math.random() * 900000).toString();

export const generateJWTToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // MS
        secure: process.env.NODE_ENV !== "development",
    });

    return token;
};