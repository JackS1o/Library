import { z } from 'zod';

const BookZodSchema = z.object({
  author: z.string({
    required_error: 'Author is required',
    invalid_type_error: 'Author must be a string',
  }),
  country: z.string({
    required_error: 'Country is required',
    invalid_type_error: 'Country must be a string',
  }),
  imageLink: z.string({
    required_error: 'Image link is required',
    invalid_type_error: 'Image link must be a string',
  }),
  language: z.string({
    required_error: 'Language is required',
    invalid_type_error: 'Language must be a string',
  }),
  link: z.string({
    required_error: 'Link is required',
    invalid_type_error: 'Link must be a string',
  }),
  pages: z.number({
    required_error: 'Pages is required',
    invalid_type_error: 'Pages must be a number',
  }),
  title: z.string({
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string',
  }),
  year: z.number({
    required_error: 'Year is required',
    invalid_type_error: 'Year must be a number',
  }),
});

export type IBook = z.infer<typeof BookZodSchema>;
export { BookZodSchema };