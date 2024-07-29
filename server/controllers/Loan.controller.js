const db=require('../models/index');

module.exports = {

    getAllPrequalify:async function(req,res){
        try {
            const loan= await db.LoanPrequalify.findAll({});
            res.status(200).send(loan)    
        } catch (error) {
            throw error    
        }
    },


    getOnePrequalify:async function(req,res){
    try {
        const loan= await db.LoanPrequalify.findByPk({});
        res.status(200).send(loan)    
    } catch (error) {
        throw error    
    }   
},
addPrequalify:async function(req,res){
    try {
        const Loan= await db.LoanPrequalify.create(req.body)
        res.status(200).send(Loan)    
    } catch (error) {
        console.log();
        throw error    
    }
},
deletePrequalify:async function(req,res){
    try {
        const loan=db.LoanPrequalify.destroy({where:{
            id:req.params.id,
           
        }})
        res.json(loan)
    } catch (err) {
        throw err
    }  
},
updatePrequalify:async function(req,res){
    try {
        const loan= await db.LoanPrequalify.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.status(200).send(loan)

        
    } catch (error) {
        throw error
        
    }
}   

}