import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';



const URI = 'http://localhost:7000/todolist/'

const Tabla = () => {
    const [tasks,setTask] = useState([])
    useEffect( ()=> { getTask()},[])
    const  [titulo, setTitulo] = useState('')
    const [contenido , setContenido] = useState('')

 


const getTask = async () => {
    const res = await axios.get(URI)
    setTask(res.data)
    
}

const Delete = async (id) => {
    axios.delete(`${URI}${id}`)
    getTask()
}

const Guardar = async (e) =>{
    e.preventDefault()
    axios.post(URI, {titulo: titulo, contenido: contenido})
    
}




return(
    <div className='contenedor'>
        <div className='fila'>
            <div className='columna'>
            <form className = 'd-flex align-items-center'onSubmit={Guardar}>
                    <div className='d-flex align-items-center'>
                        <label className='h6'>Tarea</label>
                        <input style={{width: '70%'}}value={titulo} onChange={ (e) => setTitulo(e.target.value)} type="text" className='form-control'></input>
                    </div>
                    <div className='d-flex align-items-center'>
                        <label className='h6'>Contenido</label>
                        <input style={{width: '70%'}} value={contenido} onChange={ (e) => setContenido(e.target.value)} type="text" className='form-control'></input>
                    </div>
                    <button onClick={getTask()}type='submit' className='h6'>Crear</button>
                </form>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tarea</th>
                            <th>Detalles</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task)=> (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.titulo}</td>
                                <td>{task.contenido}</td>
                                <td>
                                    <Link to={`/edit/${task.id}`} className = 'btn btn-info'>Editar</Link>
                                    <button onClick={()=>Delete(task.id)} className='btn btn-danger'>Borrar</button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    </div>
)
}
export default Tabla
