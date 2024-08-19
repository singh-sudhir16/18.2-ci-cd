"use client";

import { useBalance } from "@repo/store/balance";

export default function() {
  const balance = useBalance();
  return <div>
    <p> Again making changes in different branch</p>
    YOur current balance is :  {balance} . Have a good time .
  </div>
}