import { Product, Coin } from './resourceDeclaration';

export interface VerifyValueValidation {
  // 검증 및 스낵바 호출
  verifyProductInfo({ name, price, quantity }: Product, index: number): boolean;
  verifyChargeMoney(chargeMoney: number): boolean;
  verifyInputMoney(inputMoney: number): boolean;

  // 상품 정보 검증
  isValidProductNameRange(name: string): boolean;
  isOverlapProductName(name: string, index: number): boolean;
  isValidProductPrice(price: number): boolean;
  isValidProductQuantity(quantity: number): boolean;

  // 자판기 동전 충전 검증
  isValidChargeMoney(chargeMoney: number): boolean;

  // 상품 구매 금액 충전 검증
  isValidInputMoney(inputMoney: number): boolean;

  canBuyProduct({ price, quantity }: Product, totalMoney: number): boolean;
  totalAmount(): Coin;
}
