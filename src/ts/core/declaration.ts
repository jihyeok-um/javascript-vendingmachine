import { Product } from '../resource/declaration';

export interface ProductManage {
  addProduct(productInfo: Product): void;
  modifyProduct(productInfo: Product, index: number): void;
  deleteProduct(name: string): void;
  drawProductList(): void;
  getProductIndex(name: string): number;
}

export interface ChargeMoney {
  chargeMoney(coinList: Array<number>): void;
  generateRandomCoins(inputMoney: number): Array<number>;
  handleChargeMoney(e: Event): void;
  drawCoins(): void;
}
