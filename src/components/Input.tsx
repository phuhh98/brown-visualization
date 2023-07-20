interface IInput {
  label: string
  name: string
  placeHolder: string
  onChange(value: string): void
}

const Input: React.FC<IInput> = ({ label, name, onChange, placeHolder }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        width={10}
        onChange={(event) => {
          onChange(event.target.value)
        }}
        placeholder={placeHolder}
      />
    </>
  )
}

export default Input
