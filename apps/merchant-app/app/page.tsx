"use client";

import { useBalance } from "@repo/store/balance";

export default function() {
  const balance = useBalance();
  return <div>
    <p> Again making changes in different branch</p>
    <p> This is the final change to show the CI-CD demo that's why we are making some changes in different branch of same repo</p>
    YOur current balance is :  {balance} . Have a good time .
  </div>
}