import * as yup from "yup";

const titleSchema = yup.string()
    .min(3, "Title must be at least 3 characters")
    .max(30, "Title cannot be more than 30 characters")
    .required("Title is required");

const progressSchema = yup.string()
    .required("This Field is required");

export const schema = yup.object().shape({
    title: titleSchema,
    progress: progressSchema,
});