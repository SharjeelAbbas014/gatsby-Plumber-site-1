import React from "react";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { DiYeoman } from "react-icons/di";
import { AiTwotoneSound } from "react-icons/ai";
import * as prom from "./prom.module.css";
export default function Promotion() {
  return (
    <div>
      <h2 className={prom.head}>Promotions And Discount</h2>

      <div className={prom.parent}>
        <div>
          <AiTwotoneSound />
          <p>First Visit Discount</p>
        </div>
        <div>
          <DiYeoman />
          <p>Senior Discount 10%</p>
        </div>
        <div>
          <HiOutlineCurrencyDollar />
          <p>FREE Estimates</p>
        </div>
      </div>
    </div>
  );
}
