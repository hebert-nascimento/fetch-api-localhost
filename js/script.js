
document.getElementById('getPosts').addEventListener('click', getPosts);
    // document.getElementById('addPost').addEventListener('submit', addPost);

    function getPosts(){
      const data = { location:output }
      const options = {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
      body: JSON.stringify(data),
      }
      fetch('conexao.php', options)
      .then((res) => res.json())
      .then((data) => {
        let output = '<h2 class="mb-4">Usuários:</h2>';
        data.forEach(function(post){
          output += `
          <div class="card card-body mb-3">
          <h3>Nome: ${post.nome}</h3>
          <p>Email: ${post.email}</p>
          <p>Data de Criação: ${post.data}</p>
          </div>
          `;
        });
        document.getElementById('output').innerHTML = output;
      })
    }
    /*
    function getUsers(){
      fetch('users.json')
      .then((res) => res.json())
      .then((data) => {
        let output = '<h2 class="mb-4">Users</h2>';
        data.forEach(function(user){
          output += `
            <ul class="list-group mb-3">
              <li class="list-group-item">ID: ${user.id}</li>
              <li class="list-group-item">Name: ${user.name}</li>
              <li class="list-group-item">Email: ${user.email}</li>
            </ul>
          `;
        });
        document.getElementById('output').innerHTML = output;
      })
    }
    */

