const db=require('../models/loan');

module.exports = {

    getAllLoans:async function(req,res){
        try {
            const loan= await db.Loan.findAll({});
            res.status(200).send(loan)    
        } catch (error) {
            throw error    
        }   
    },


getOneLoan:async function(req,res){
    try {
        const loan= await db.Loan.findByPk({});
        res.status(200).send(loan)    
    } catch (error) {
        throw error    
    }   
},
addLoan:async function(req,res){
    try {
        const loan= await db.Loan.create(req.body)
        res.status(200).send(laon)    
    } catch (error) {
        throw error    
    }
},
deleteLoan:async function(req,res){
    try {
        const loan=db.Loan.destroy({where:{
            id:req.params.id,
           
        }})
        res.json(loan)
    } catch (err) {
        throw err
    }  
},
updateLoan:async function(req,res){
    try {
        const loan= await db.Loan.update(req.body,{
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