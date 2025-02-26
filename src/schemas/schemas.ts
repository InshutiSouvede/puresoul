import {z} from 'zod';
const SignupSchema = z.object({
    email: z.string().email({message: 'Invalid email address'}),
    name: z.string({message: 'First name is required'}).min(3,{message: 'Must be at least 3 characters'}),
    description: z.string({message: 'A bit about you is required'}).min(3,{message: 'Must be at least 3 characters'}),
    gender: z.enum(['male','female', 'other'],{message: 'Gender must male, female, or other'}),
    password: z.string().min(8,{"message": "Password must be at least 8 characters"}).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {message:"Password must contain a letter, a number, and a special character"}),
    confirmPassword: z.string().min(8,{message: 'Password must be at least 8 characters'}),
})
.refine(data => data.password === data.confirmPassword, {
    message: 'Passwords should match',
    path: ['confirmPassword'],
  });

const updateUserSchema = z.object({
      email: z.string().email({message: 'Invalid email address'}),
      name: z.string({message: 'First name is required'}).min(3,{message: 'Must be at least 3 characters'}),
      description: z.string({message: 'A bit about you is required'}).min(3,{message: 'Must be at least 3 characters'}),
      gender: z.enum(['male','female', 'other'],{message: 'Gender must male, female, or other'})
  })
export { SignupSchema, updateUserSchema };