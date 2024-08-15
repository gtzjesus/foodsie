'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

// Validation helper function
function handleValidateText(text) {
  return !text || text.trim() === '';
}

// Server action sharing meal (guaranteed only to execute in the server)
export async function shareMeal(previousState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  // Validate here
  if (
    handleValidateText(meal.title) ||
    handleValidateText(meal.summary) ||
    handleValidateText(meal.instructions) ||
    handleValidateText(meal.creator) ||
    handleValidateText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid input',
    };
  }
  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
}
