import Web3 from "web3";
import React, { useState } from "react";
import { useContext, useEffect } from "react";


import LotteryContext from "../contexts/lotteryContext"
export default function Header() {
  const [lottery, setLottery] = useContext(LotteryContext);
  const [prize, setPrize] = useState("");
  useEffect(async () =>{
    let ticketPrize = await lottery.methods.todaysPrize().call();
    setPrize(ticketPrize);

 
  }, [lottery])
  return (
    <div className="header">
      <div className="todayPrize">Today's Prize: {Web3.utils.fromWei(prize, 'ether')} ETH</div>
    </div>
  );
}
