import { CardPhone } from "@/entities/Card/type/model";

export const getAvgPrice = (phones : CardPhone[]) => {
    return phones.reduce((sum : number, phone : CardPhone) => { sum += phone.price; return sum }, 0) / phones.length;
}