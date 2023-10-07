import { useState } from "react";

const useForm = (initialState) => {
	const [form, setForm] = useState(initialState)
 

  const onChangeForm = (event) => {
		const {id, name, value} = event.target
        if(id === name){
            setForm({...form, [name]: value});
        }else{
            alert(name + " inválido");
        }
  };
  return {form, onChangeForm}
}

export default useForm;