import { useNavigate } from "react-router";
import InputLabel from "../components/InputLabel";
import { RouteLinks } from "../routes/routes";
import { newBookSchema } from "../schemas/schemas";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import UseNewBook from "../hooks/useNewBook";
import Button, { ButtonBehavior, ButtonStyles } from "../components/Button";

type NewBook = z.infer<typeof newBookSchema>;
export default function NewBook() {
  const [{ loading }, execute] = UseNewBook();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<NewBook>({
    mode: "onTouched",
    resolver: zodResolver(newBookSchema),
  });
  const [submitError, setSubmitError] = useState<string | null>(null);
  const handleSignup = (data: NewBook) => {
    execute({
      data,
    })
      .then((res) => {
        console.log(res);
        if (!res.data.data) {
          throw "Could not create book";
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
        Add a new Book
      </h1>
      <form
        className="flex flex-col gap-8 py-8"
        onSubmit={handleSubmit(handleSignup)}
      >
        {submitError && <p className="text-red-500">{submitError}</p>}

        <div className="flex flex-col">
          <InputLabel id="title" {...register("title")}>
            Title
          </InputLabel>
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <InputLabel id="author" {...register("author")}>
            Author Name
          </InputLabel>
          {errors.author && (
            <p className="text-red-500">{errors.author.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <InputLabel id="description" {...register("description")}>
            Description
          </InputLabel>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
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

        <div className="flex flex-col">
          <InputLabel id="path" {...register("path")}>
            Where to get it
          </InputLabel>
          {errors.path && <p className="text-red-500">{errors.path.message}</p>}
        </div>

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
