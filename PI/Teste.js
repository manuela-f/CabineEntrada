var cadatrando = "";
function Cadastra () 
{
    cadastrando=document.getElementById('Placaid').value;
    document.getElementById('placadig').innerHTML=cadastrando;

n=new Date();
y=n.getFullYear();
m=n.getMonth() + 1;
d=n.getDate();
document.getElementById("date").innerHTML=d+"/"+m+"/"+ y;

today=new Date();
h=today.getHours();
m=today.getMinutes();
s=today.getSeconds();
document.getElementById('horario').innerHTML=h+":"+m+":"+s;
setTimeout('time()',500);

document.getElementById("mensagem").innerHTML="VOLTE SEMPRE!";
document.getElementById("cancela").innerHTML="CANCELA LIBERADA!";

let key = parseInt(Math.random() * 1000000000)
document.getElementById('codigoticket').innerHTML=key;

if (codigoticket !== "" && Placaid !== "") 
{
	  let objVeiculo = { codigo: parseInt(codigoticket), placa: Placaid, date: '', status: 0 };
	  let url = `http://localhost:3000/Veiculos/`

	  let res = axios.post(url, objVeiculo)
	  .then(response => {
		  if (response.date) {
			  const msg = new Comunicado (response.date.codigoticket, 
										  response.date.codigoticket, 
										  response.date.descricao);
			  alert(msg.get());
		  }
	  })
	  .catch(error  =>  {
		  
		  if (error.response) {
			  const msg = new Comunicado (error.response.date.codigoticket, 
										  error.response.date.mensagem, 
										  error.response.date.descricao);
			  alert(msg.get());
		  }
	  })
}else
{
	  alert('Todos os dados precisam estar preenchidos.');
}
}

function GerarNovoTicket()
{
    document.getElementById('date').innerHTML="";
    document.getElementById('horario').innerHTML="";
    document.getElementById('mensagem').innerHTML="";
    document.getElementById('cancela').innerHTML="";
    document.getElementById('placadig').innerHTML="";    
}
