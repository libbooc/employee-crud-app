import React from 'react';
import { prisma } from '@/app/lib/prisma';

import Link from 'next/link';

export default async function EmployeeDetailsPage({
  params,
}: {
  params: {
    id: string;
    firstName: string;
    lastName: string;
    job: string;
    email: string;
  };
}) {
  const { id } = params;
  const data = await prisma.employee.findUnique({
    where: {
      id,
    },
  });


  return (
    <main className="max-w-4xl text-center mx-auto mt-20">
      <div className="absolute top-0 left-0 p-8 ">
        <Link href="/">
            <p className="btn btn-sm btn-outline btn-primary">Back</p>
        </Link>
      </div>
        <form className="max-w-md mx-auto ">
                <h3 className="font-bold text-2xl">View Employee Details</h3>

                <div className="label mt-4">
                    <span className="label-text">First Name</span>
                </div>
                <label className="form-control">
                    <input name="firstName" id="firstName" type="text" placeholder="Type here" defaultValue={data?.firstName} className="cursor-not-allowed input input-bordered input-primary w-full " readOnly />
                </label>

                <div className="label mt-4">
                    <span className="label-text">Last Name</span>
                </div>
                <label className="form-control">
                    <input name="lastName" id="lastName" type="text" placeholder="Type here" defaultValue={data?.lastName} className="cursor-not-allowed input input-bordered input-primary w-full " readOnly />
                </label>

                <div className="label mt-4">
                    <span className="label-text">Job</span>
                </div>
                <label className="form-control">
                    <input name="job" id="job" type="text" placeholder="Type here" defaultValue={data?.job} className="cursor-not-allowed input input-bordered input-primary w-full" readOnly />
                </label>

                <div className="label mt-4">
                    <span className="label-text">Email</span>
                </div>
                <label className="form-control">
                    <input name="email" id="email" type="text" placeholder="Type here" defaultValue={data?.email} className="cursor-not-allowed input input-bordered input-primary w-full " readOnly />
                </label>
                </form>
    </main>
  );
}