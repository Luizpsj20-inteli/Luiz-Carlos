$(".information-list li").css({
    "text-align": "center",
    "width": "50%",
    "margin-left": "20%"
})

const skills = document.querySelector(".db")

function getdata(){
  let url = "/data";
  

  let xhttp = new XMLHttpRequest();
  xhttp.open("get", url, false);
    xhttp.send();

  let data = JSON.parse(xhttp.responseText); 
 

  let html = "";
    data.forEach(element => {
        html += `<li>${element.skills}</li>
        <button onclick="skillsdelete(${element.id})">Deletar</button>
        <button>Editar</button>`;
    });
    skills.innerHTML = html;
}

getdata();

function skillsdelete(id) {
 
  var url = "/skillsdelete/"+id;
  var xhttp = new XMLHttpRequest();
   
  xhttp.open("POST", url, false);
 
  xhttp.send()
  
  window.location.href = "/"

  console.log('deu certo')

  
  //A execução do script pára aqui até a requisição retornar do servidor
  // window.location.href = "/"
}


