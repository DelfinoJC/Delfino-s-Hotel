import "dotenv/config";

export const seedAdm = {
  admEmail: process.env.ADM_EMAIL as string,
  admPassword: process.env.ADM_PASSWORD as string,
};
