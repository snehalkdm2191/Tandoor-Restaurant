// Project files
import fields from "../data/fields.json";
import InputField from "./InputField";

export default function MenuList({ Menu, onChange }) {
  const FormFields = fields.map((item, index) => (
    <InputField
      key={index}
      onChange={onChange}
      options={item}
      state={Menu[item.key]}
    />
  ));

  return <section>{FormFields}</section>;
}
