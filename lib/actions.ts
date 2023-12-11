"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";

export type DeleteEmployeeResult = {
  success: boolean;
  message?: string;
};


export async function viewEmployee(id: string) {
    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    });
    revalidatePath("/");
    return employee;
  }

export async function addEmployee(formData: FormData) {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const job = formData.get("job") as string;
    const email = formData.get("email") as string;

    await prisma.employee.create({
        data: {
            firstName,
            lastName,
            job,
            email,
        },
    });

    revalidatePath("/");
}

export async function updateEmployee(id: string,formData: FormData) {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const job = formData.get("job") as string;
    const email = formData.get("email") as string;
  
    await prisma.employee.update({
      where: {
        id,
      },
      data: {
        firstName,
        lastName,
        job,
        email,
      },
    });
    revalidatePath("/");
  }

export async function deleteEmployee(id: string) {
    await prisma.employee.delete({ where: { id }});
    revalidatePath("/");
}