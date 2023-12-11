import AddEmployee from "@/app/components/AddEmployee";
import { updateEmployee } from "@/lib/actions";
import { prisma } from "@/lib/prisma";

export default async function Page({ params }: { params : { id: string } } ) {
    const id = params.id;
    const data = await prisma.employee.findUnique({
        where: {
            id,
        },
    });
    const updateEmployeeWithId = updateEmployee.bind(null, params.id);

    return(
        <main className="max-w-4xl mx-auto mt-20">
            <div className="text-center my-5 flex flex-col gap-4">
                <h1 className="text-2xl font-bold"> Employee Management System </h1>
                <AddEmployee />
            </div>
        </main> 
    )
}