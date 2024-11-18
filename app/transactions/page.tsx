import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColums } from "./_colums";
import AddTransactionButton from "../_components/add-transaction-button";

const TransactionsPage = async () => {
  // acessar as transações do meu banco dedados
  const transactions = await db.transaction.findMany({});

  return (
    <div>
      <div className="space-y-6 p-6">
        {/* Título e botão */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable columns={transactionColums} data={transactions} />
      </div>
    </div>
  );
};

export default TransactionsPage;
