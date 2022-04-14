import Model from "../models/Model.js";

export const GetOneReg = async (req, res) =>{

    try{
        const Reg = await Model.findAll({where:{id:req.params.id}})
        res.json(Reg[0])

    }catch (error){

        res.json({message: error.message})

    }

} 


export const GetAllReg = async (req, res) =>{

    try{
        const Regs = await Model.findAll()
        res.json(Regs)

    }catch (error){

        res.json({message: error.message})

    }

} 

export const CreateReg = async (req, res) =>{

    try{
        await Model.create(req.body)
        res.json({message: "Creation Successful"})

    }catch (error){

        res.json({message: error.message})

    }

} 

export const UpdateReg = async (req, res) =>{

    try{
        await Model.update(req.body,{where: {id: req.params.id}})
        res.json({message: "Update Successful"})

    }catch (error){

        res.json({message: error.message})

    }

} 

export const DeleteReg = async (req, res) =>{

    try{
        await Model.destroy({where: {id: req.params.id}})
        res.json({message: "Delete Successful"})

    }catch (error){

        res.json({message: error.message})

    }

}