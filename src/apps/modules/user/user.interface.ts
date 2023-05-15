// creat a interface;
interface IUser {
  id: string;
  Role: "Student";
  password: string;
  name: {
    firstName: string;
    lastName: string
  };
  dateOfBirth?: string;
  gender: "mail" | "femail";
  email?: string;
  contsctNmbr: string;
  emergiencyNmbr: string;
  presendAdrs: string;
  permanandAddress: string
};
export default IUser