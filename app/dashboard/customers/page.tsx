import React from 'react';

import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import CustomersTable from '@/app/ui/customers/table';
import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customer',
};

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: number;
  };
}) => {
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);

  return (
    <>
      <CustomersTable customers={customers} />
    </>
  );
};

export default Page;
