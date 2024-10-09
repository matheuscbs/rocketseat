import { createContext, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transactions {
  id: number;
  title: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface CreateTransactionInput {
  title: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionContextType {
  transactions: Transactions[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    setTransactions(response.data);
  }, []);

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { title, price, category, type } = data;

      const response = await api.post("/transactions", {
        title,
        price,
        category,
        type,
        createdAt: new Date(),
      });

      setTransactions((state) => [response.data, ...state]);
    },
    []
  );

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
