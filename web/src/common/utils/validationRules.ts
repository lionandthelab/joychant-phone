import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "이름을 입력해주세요";
  }
  if (!values.cellphone) {
    errors.cellphone = "전화번호를 입력해주세요";
  }
  if (!values.amount) {
    errors.amount = "원하시는 금액을 입력해주세요";
  }
  return errors;
}
