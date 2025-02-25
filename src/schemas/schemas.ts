import {z} from 'zod';
const SignupSchema = z.object({
    email: z.string().email({message: 'Invalid email address'}),
    name: z.string({message: 'First name is required'}).min(3,{message: 'Must be at least 3 characters'}),
    password: z.string().min(8,{"message": "Password must be at least 8 characters"}).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {message:"Password must contain a letter, a number, and a special character"}),
    confirmPassword: z.string().min(8,{message: 'Password must be at least 8 characters'}),
})
.refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
  
export { SignupSchema };