const time = function(req,res,next){

    const date = new Date();
    const dayOfWeek = date.getDay();
    const hour = date.getHours();

    if (( hour < 17 && hour > 9) && ( dayOfWeek > 0 && dayOfWeek < 6)){
        console.log('it works')
        next();
    }else(
        console.log('return at work time')
    )
}
module.exports = time;