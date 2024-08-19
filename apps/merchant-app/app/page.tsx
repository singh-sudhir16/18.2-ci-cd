"use client";

import { useBalance } from "@repo/store/balance";

export default function() {
  const balance = useBalance();
  return <div>
    YOur current balance is this :  {balance} . Have a good time .
  </div>
}