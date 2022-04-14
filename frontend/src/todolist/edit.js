import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const URI = 'http://localhost:7000/todolist/'

const Edit = () =>{

    const  [titulo, setTitulo] = useState('')
    const [contenido , setContenido] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    const [tasks,setTask] = useState([])
    useEffect( ()=> { getTask()},[])

    const getTask = async () => {
        const res = await axios.get(URI)
        setTask(res.data)
        
    }

    const Editar = async (e) =>{
        e.preventDefault()
        await axios.put(URI + id,{titulo: titulo, contenido: contenido})
        navigate('/')
        getTask()
    }
    
    useEffect(()=>{
        getTaskByID()
    },[])
    
    const getTaskByID = async(id) => {
        const res = await axios.get(URI+id)
        setTitulo(res.data.titulo)
        setContenido(res.data.contenido)
    }

    return(
                <form className = 'd-flex align-items-center'onSubmit={Editar}>
                    <div className='d-flex align-items-center'>
                        <label className='h6'>Tarea</label>
                        <input style={{width: '70%'}}value={titulo} onChange={ (e) => setTitulo(e.target.value)} type="text" className='form-control'></input>
                    </div>
                    <div className='d-flex align-items-center'>
                        <label className='h6'>Contenido</label>
                        <input style={{width: '70%'}} value={contenido} onChange={ (e) => setContenido(e.target.value)} type="text" className='form-control'></input>
                    </div>
                    <button onClick={getTask()} type='submit' className='h6'>Editar</button>
                </form>
    )



}

export default Edit