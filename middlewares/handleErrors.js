function handleErros (err, req,res,next){
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!', detail:err.message });
}

module.exports = handleErros