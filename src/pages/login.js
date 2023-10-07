import useForm from "../components/useForm";
import './style.css';
import Header from "../components/Header/header";

function TelaLogin () {
  const { form, onChangeForm } = useForm({ email: "", password: "" });
  const fazerLogin = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div className="form">
      <Header />
      <h1>Login</h1>
        <form className="form-body" onSubmit={fazerLogin}>
            <div className="username">
                <input
                    name="email"
                    value={form.email}
                    id="email"
                    onChange={onChangeForm}
                    type="email"
                    placeholder="E-mail"
                />
            </div>
            <div className="password">
                <input
                    name="password"
                    value={form.password}
                    id="password"
                    onChange={onChangeForm}
                    type="password"
                    placeholder="Senha"
                />    
            </div>
            <button type="submit">Fazer Login</button>
        </form>
        <button>Cadastrar</button>

    </div>
  );
};

export default TelaLogin;