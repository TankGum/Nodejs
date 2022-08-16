import db from '../models/index'
import CRUDService from '../services/CRUDService'

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        console.log(data)
    return res.render('homepage.ejs', {
        data: JSON.stringify(data)
    })
    } catch(e) {
        console.log(e)
    }
}

let getAbout = (req, res) => {
    return res.render('test/about.ejs')
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
    let message =  await CRUDService.createNewUser(req.body)
    console.log(message)
    return res.send('post crud from server')
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser()
    console.log(data)
    return res.render('displayCRUD.ejs', {
        dataTable: data,
    })
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId)

        return res.render('editCRUD.ejs')
    } else {
        return res.send('User Error')
    }

}

module.exports = {
    getHomePage: getHomePage,
    getAbout: getAbout,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
}