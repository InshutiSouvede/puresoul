import { z } from "zod";
import InputLabel from "../components/InputLabel";
import { RouteLinks } from "../routes/routes";
import { newExpertSchema } from "../schemas/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router";
import useNewExpert from "../hooks/useNewExpert";
import Button, { ButtonBehavior, ButtonStyles } from "../components/Button";

type NewExpert = z.infer<typeof newExpertSchema>;

export default function NewExpert() {
  const [{ loading }, execute] = useNewExpert();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<NewExpert>({
    mode: "onTouched",
    resolver: zodResolver(newExpertSchema),
  });
  const [submitError, setSubmitError] = useState<string | null>(null);
  const handleSignup = (data: NewExpert) => {
    execute({
      data,
    })
      .then((res) => {
        console.log(res);
        if (!res.data.data) {
          throw "Could not create expert";
        }
        navigate(RouteLinks.HOME);
        setSubmitError(null);
      })
      .catch(() => {
        setSubmitError("An error occurred. Please try again.");
      });
  };
  return (
    <main className="lg:w-2/5 lg:mx-auto py-20 p-8">
      <h1 className="text-purple-600 font-bold uppercase border-b-4 w-max">
        Register New Expert
      </h1>
      {submitError && <p className="text-red-500">{submitError}</p>}
      <form
        className="grid md:grid-cols-2 gap-8"
        onSubmit={handleSubmit(handleSignup)}
      >
        <section className="personal flex flex-col gap-8 py-8">
        <p className="text-violet-800 font-medium py-2 text-center">Personal Infomation</p>
          <div className="flex flex-col">
            <InputLabel id="name" {...register("name")}>
              Name
            </InputLabel>
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <InputLabel id="email" {...register("email")}>
              Email
            </InputLabel>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <InputLabel id="phoneNumber" {...register("phoneNumber")}>
              Phone Number
            </InputLabel>
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <InputLabel id="gender" {...register("gender")}>
              Gender
            </InputLabel>
            {errors.gender && (
              <p className="text-red-500">{errors.gender.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <InputLabel id="age" {...register("age", { valueAsNumber: true })}>
              Age
            </InputLabel>
            {errors.age && <p className="text-red-500">{errors.age.message}</p>}
          </div>

          <div className="flex flex-col">
            <InputLabel type="password" id="password" {...register("password")}>
              Password
            </InputLabel>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
        </section>
        <section className="personal flex flex-col gap-8 py-8">
          <p className="text-violet-800 font-medium py-2 text-center">Expert Specific Infomation</p>

          <div className="flex flex-col">
            <InputLabel id="specialty" {...register("specialty")}>
              Specialty
            </InputLabel>
            {errors.specialty && (
              <p className="text-red-500">{errors.specialty.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <InputLabel id="expertise" {...register("expertise")}>
              Expertise
            </InputLabel>
            {errors.expertise && (
              <p className="text-red-500">{errors.expertise.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <InputLabel id="image" {...register("image")}>
              Image
            </InputLabel>
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>
        </section>
        <Button
          type="submit"
          behavior={ButtonBehavior.BUTTON}
          disabled={!isValid || loading}
          customStyles={isValid ? ButtonStyles.PRIMARY : ButtonStyles.DISABLED}
        >
          {loading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </main>
  );
}
