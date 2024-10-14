import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Content-Type': 'application/json'
}

const crearProductora = (productora) => {
    const data = {
        nombre: productora.nombre,
        descripcion: productora.nombre,
        slogan: productora.solgan
    }
    return axiosConfig.post('/productoras', data, {
        headers: headers
    })
}

const obtenerProductoras = () => {
    return axiosConfig.get('/productoras', {
        headers: headers
    })
}

const editarProductoraPorID = (productora, id) => {
    const data = {
        nombre: productora.nombre,
        descripcion: productora.nombre,
        slogan: productora.solgan,
        estado: productora.estado
    }
    return axiosConfig.put('/productoras/' + id, data, {
        headers: headers
    })
}

const obtenerProductoraPorID = (id) => {
    return axiosConfig.get('/productoras/' + id, {
        headers: headers
    })
}

export {
    crearProductora,
    obtenerProductoras,
    editarProductoraPorID,
    obtenerProductoraPorID
}