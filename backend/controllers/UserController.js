import Users from '../models/UserModel.js'

export const getUsers = async(req, res) => {
    try {
        const response = await Users.findAll();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getUserById = async(req, res) => {
    try {
        const response = await Users.findOne({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
}
export const createUser = async(req, res) => {
    const {name, price} = req.body;
    try {
        const user = await Users.create({
            name: name,
            price: price
        })
        res.status(200).json(user) 
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateUser = async(req, res) => {
    const {name, price} = req.body
    try {
        await Users.update({
            name: name,
            price: price
        },{
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json({msg: "product berhasil diupdate"});
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const deleteUser = async(req, res) => {
    try {
        const response = await Users.destroy({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json({msg: 'product berhasil dihapus'})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
