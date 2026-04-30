"use client";
import { CardPhone } from "@/entities/Card/type/model";
import { useState } from "react";

export  const savePhones = (setPhonesState: (phones: CardPhone[]) => void, updatedPhones: CardPhone[], newPhone: CardPhone) => {
    const updated = [...updatedPhones, newPhone];

  setPhonesState(updated);
  localStorage.setItem('nexus_phones', JSON.stringify(updated));
};