import TextField from '@mui/material/TextField';
import MaskedInput from 'react-text-mask';

const numberMask = ['(', /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];


export default function InputTelefone({value, setValue, label}) {
  return (
    <MaskedInput
            mask={numberMask}
            value={value}
            onChange={(e)=>{setValue(e.target.value)}}
            render={(ref, props) => (
                <TextField
                    {...props}
                    fullWidth
                    inputRef={ref}
                    id={'Telefone'}
                    name={'Telefone'}
                    type="text"
                    label={label}
                    placeholder={"Telefone"}
                    autoComplete="off"
                    />
                )}
        />
  )
}