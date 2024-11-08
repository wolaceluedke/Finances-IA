import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColums } from "./_colums";

const TransactionsPage = async () => {
  // acessar as transações do meu banco dedados
  const transactions = await db.transaction.findMany({});

  return (
    <div>
      <div className="space-y-6 p-6">
        {/* Título e botão */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <Button className="rounded-full">
            <ArrowDownUpIcon />
            Adicionar Transação
          </Button>
        </div>
        <DataTable columns={transactionColums} data={transactions} />
      </div>
    </div>
  );
};

export default TransactionsPage;
