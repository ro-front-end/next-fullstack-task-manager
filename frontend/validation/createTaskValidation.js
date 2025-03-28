import * as Yup from "yup";

export const initialValues = {
  title: "",
  description: "",
};

export const validationSchema = Yup.object({
  title: Yup.string().required("The task title is required!"),
  description: Yup.string()
    .min(5, "The task description must be at least 5 characters long")
    .required("The task description is required"),
});
