import './style.css';

const CardEmail = ({email,  deletar}) => {
  return (
    <div key={email.id} className='cardEmail'>
        <p><strong>Nome:</strong> {email.name}</p>
        <p><strong>Telefone:</strong> {email.fone}</p>
        <p><strong>Email:</strong> {email.email}</p>
        <p><strong>Mensagem:</strong>
        <br />
        {email.message}</p>
       <br />
        <div>
            <button onClick={(e) => deletar(e, email._id)}>Deletar</button>
            <button>Enviar Whatsapp</button>
        </div>
    </div>
  )
}

export default CardEmail;