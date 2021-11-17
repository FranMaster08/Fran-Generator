
const navigationController ={
    getHome : (req, res , next) => {
        res.render('index',{title: "Fran Generator"})
    }
}

module.exports =navigationController