const authorize=(req,res,next)=>{
    const {user}=req.query;
    if(user==='jhon'){
        //req.user={user:'jhonson'};
        console.log('authorised')
        next();
    }
    else{
        res.status(401).send('Unauthorized');
    }
}
module.exports=authorize;