import React,{useEffect,useState} from 'react'; 
import './App.css';

function App() {
//2
        const url='https://jsonplaceholder.typicode.com/users'

  //5
  const [todos, setTodos] = useState([])

        
       //3 
        const fechtApi= async()=>{

            const response = await fetch(url)
            console.log(response.status)
//6
            const responseJson= await response.json();
            setTodos(responseJson)
            console.log(responseJson)

        }
//4  use efect se engancha de la funcion fectch api para rederizar 
        useEffect(() => {
          
          fechtApi();
          
        }, [])


        return (
    <div className="App">
    
          <h1>Usuarios</h1>
       
            
          <div className="container">
            
          
<ol>
          {!todos ? 'Cargando...':
          todos.map((todo,index)=>{
            return <li key={index}>{todo.name } -- {todo.email}</li>


          })
        }
          </ol>
       
          <table className="table table-dark">
    <thead>
      <tr>
        <th>UserName</th>
         <th>Email</th>
      </tr>
    </thead>
    
    <tbody>{
       todos.map(item =>(
        <tr >
        <td>{item.name}</td>
        <td>{item.email}</td>
      
      </tr>
       ))}
     

  
    </tbody>
  </table>

  <form >
    <select className="form-select">{
      todos.map(item=>(
      <option >{item.name}</option>

      ))}
     
    </select>
    <br></br>
    <button type="submit" className="btn btn-primary">Submit</button>
    <br></br> <br></br>
  </form>


  </div>
    </div>
  );
}

export default App;


//1 borrar todo lo de debajo de classname
//2 crear const url y pegar url
//3 crear funcion fetchApi y async y crear response donde se le pasa la url
//4 crear useEffect
//5 crear usestate 
//6 crear  const responseJson= response.json(); setTodos(responseJson)
//7 