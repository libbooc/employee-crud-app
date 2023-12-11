import AddEmployee from './components/AddEmployee'
import { prisma } from '@/lib/prisma'
import EmployeeList from './components/EmployeeList';


export default async function Home() {

  const data = await prisma.employee.findMany();

  return (
    <main className="max-w-5xl mx-auto mt-20">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold mt-10"> Employee Management System </h1>
        <div className="mt-4">
          <AddEmployee />
        </div>
      </div>
      <EmployeeList data={data} />
    </main>  
  )
}
