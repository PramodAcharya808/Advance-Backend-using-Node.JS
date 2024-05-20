import { ApiError } from "../utils/ErrorHandler";

export const JWTverify = async (req, res, next) => {
  const token =
    req.cookies?.access_token ||
    req.headers("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized access");
  }

  

  try {
  } catch (error) {
    throw new ApiError(500, "Somthing went wrong", error);
  }
};
