export const docsHtmlString = `
  
  <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <title>Api Documentation</title>

  <style>
    body {
      padding: 30px;
      background-color: rgb(25,22,34);
      color: #fff;
    }
    h1 {
      color: rgb(251, 119, 195);
      text-align: center;
      font-family: fantasy;
      margin-bottom: 3rem;
    }
 
    .card {
      background-color: transparent;
      border-radius: 10px !important;
      -webkit-box-shadow: 5px 2px 15px 1px #999797;
      box-shadow: 5px 2px 15px 0.5px #9997979a;

    }
    .card-header {
      border-radius: 10px 10px 0px 0px !important;
      background-color: #fff;
      color: #000;
      font-weight: 700;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .card-body {
      padding-bottom: 10px;
      padding-top: 10px;
      display: flex;
      align-items: flex-end;
      
    }
    route {
      color: rgb(251, 119, 195);
      font-weight: 700
    }
    path {
      margin-left: 10px;
      color: rgb(138, 138, 139);
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 0.8rem;
    }
    path::before {
      content: "/v1"
    }
    descritpion {
      font-size: 0.8rem;    
    }
    w {
      color: greenyellow;
    }
    requestBody {
      margin-left: 10px;
      margin-top: 20px !important;
      font-size: 0.7rem;
    }
    required::after {
      content: "(required)";
      color: rgb(179, 2, 2);
      margin-left: 5px;
      font-size: 0.7rem;
    }
    requestBody div {
      display: flex;
      align-items: center;
    }
    type {
      color: #007bff;
      font-size: 0.7rem;
      margin-left: 10px;
    }
    format::before {
      content: "Format: ";
      color: rgb(190, 181, 77);
    }
    type::before{
      content: "("
    }
    type::after{
      content: ")"
    }
    format {
      font-size: 0.7rem;
      margin-left: 10px;
      color: rgb(230, 221 ,121);
    }
    pre {
      font-size: 10px;
      color: rgb(103, 228, 128);
      margin-top: 10px !important;
    }
    .responses {
      color: #007bff;
      font-size: 11px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>TeamSoft API Documentation</h1>
    <div class="row ">
      <div class="offset-md-1 col-10">
        <div class="card">
          <div class="card-header">
            Costumers
          </div>

          <div class="card-body row">            
            <div class="col-4">
              <route>GET</route>
              <path>/costumer</path>
            </div>
            <div class="col-5">
              <descritpion>Get all entire costumers (address included).</descritpion>
            </div>          
            <div class="col-3 responses">
              200 OK
            </div>
          </div>

          <div class="card-body row">            
            <div class="col-4">
              <route>GET</route>
              <path>/costumer/<w>:idOrCnpj</w></path>
            </div>
            <div class="col-5">
              <descritpion>Get an specific costumer by ID or CNPJ.</descritpion>
            </div>   
            <div class="col-3 responses">
              200 OK, 404 NOT FOUND
            </div>       
          </div>

          <div class="card-body row">            
            <div class="col-4">
              <route>POST</route>
              <path>/costumer</path>
            </div>
            <div class="col-5">
              <descritpion>Create a new costumer. </descritpion>
            </div>
            <div class="col-3 responses">
              200 OK, 400 VALIDATION ERROR
            </div>
            <pre id="POST_COSTUMER"></pre>

          </div>

          <div class="card-body row">            
            <div class="col-4">
              <route>PUT</route>
              <path>/costumer/<w>id</w></path>
            </div>
            <div class="col-5">
              <descritpion>Updated a existing costumer by ID </descritpion>
            </div>
            <div class="col-3 responses">
              200 OK, 400 VALIDATION ERROR
            </div>
            <pre id="PUT_COSTUMER"></pre>

          </div>


          <div class="card-body row">            
            <div class="col-4">
              <route>DELETE</route>
              <path>/costumer/<w>id</w></path>
            </div>
            <div class="col-5">
              <descritpion>Delete a existing costumer by ID </descritpion>
            </div>
            <div class="col-3 responses">
              200 OK, 400 VALIDATION ERROR
            </div>
            <pre id="PUT_COSTUMER"></pre>

          </div>
         

        </div>
      </div>

      <div class="offset-md-1 col-10 mt-5">
        <div class="card">
          <div class="card-header">
            Address
          </div>

          <div class="card-body row">            
            <div class="col-4">
              <route>GET</route>
              <path>/address</path>
            </div>
            <div class="col-5">
              <descritpion>Get all entire addresses.</descritpion>
            </div>          
            <div class="col-3 responses">
              200 OK
            </div>
          </div>

          <div class="card-body row">            
            <div class="col-4">
              <route>GET</route>
              <path>/address/<w>:id</w></path>
            </div>
            <div class="col-5">
              <descritpion>Get an specific address by address_id.</descritpion>
            </div>   
            <div class="col-3 responses">
              200 OK, 404 NOT FOUND
            </div>       
          </div>

          <div class="card-body row">            
            <div class="col-4">
              <route>GET</route>
              <path>/address/<w>:costumer_id</w></path>
            </div>
            <div class="col-5">
              <descritpion>Get all address from specific costumer.</descritpion>
            </div>   
            <div class="col-3 responses">
              200 OK, 404 NOT FOUND
            </div>       
          </div>

          <div class="card-body row">            
            <div class="col-4">
              <route>POST</route>
              <path>/address/<w>:costumer_id</w></path>
            </div>
            <div class="col-5">
              <descritpion>Create a new address for a specific Costumer. </descritpion>
            </div>
            <div class="col-3 responses">
              200 OK, 400 VALIDATION ERROR
            </div>
            <pre id="POST_ADDRESS"></pre>

          </div>

          <div class="card-body row">            
            <div class="col-4">
              <route>PUT</route>
              <path>/address/<w>:id</w></path>
            </div>
            <div class="col-5">
              <descritpion>Update a existing address by ID </descritpion>
            </div>
            <div class="col-3 responses">
              200 OK, 400 VALIDATION ERROR
            </div>
            <pre id="PUT_ADDRESS"></pre>

          </div>


          <div class="card-body row">            
            <div class="col-4">
              <route>DELETE</route>
              <path>/address/<w>:costumer_id/:id</w></path>
            </div>
            <div class="col-5">
              <descritpion>Delete a existing address by ID </descritpion>
            </div>
            <div class="col-3 responses">
              200 OK, 400 VALIDATION ERROR
            </div>
            <pre id="PUT_COSTUMER"></pre>

          </div>
         

        </div>
      </div>
    </div>
 
  </div>
  <script>
    const POST_COSTUMER = {
      cnpj: "99.999.999/9999-99",
      companyName: "string",
      contactName: "string",
      telphone: "(99) 99999-9999",
      address: {
        street:"string",
        number:"string",
        city: "string",
        state: "string", 
        district:"string",
        zipCode: "99999-999",
        complement: "string (not required)",
      }
    } 
    const POST_ADDRESS = {
      street:"string",
      number:"string",
      city: "string",
      state: "string", 
      district:"string",
      zipCode: "99999-999",
      complement: "string (not required)",
      
    } 
    const PUT_COSTUMER = {
      cnpj: "99.999.999/9999-99 (not required)",
      companyName: "string (not required)",
      contactName: "string (not required)",
      telphone: "(99) 99999-9999 (not required)"
    }
    const PUT_ADDRESS = {
      street:"string",
      number:"string",
      city: "string",
      state: "string", 
      district:"string",
      zipCode: "99999-999",
      complement: "string (not required)",
    }
    let x
    
    x = document.getElementById("POST_COSTUMER")
    x.innerHTML = JSON.stringify(POST_COSTUMER, null, 2)

    x = document.getElementById("PUT_COSTUMER")
    x.innerHTML = JSON.stringify(PUT_COSTUMER, null, 2)

    x = document.getElementById("PUT_ADDRESS")
    x.innerHTML = JSON.stringify(PUT_ADDRESS, null, 2)
    x = document.getElementById("POST_ADDRESS")
    x.innerHTML = JSON.stringify(POST_ADDRESS, null, 2)
  </script>
</body>

</html>
  `