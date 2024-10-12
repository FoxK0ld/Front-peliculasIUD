import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Content-Type' : 'application/json'
}

const crearMedia = (media) => {
    const data = {
        serial : media.serial,
        titulo : media.titulo,
        sipnosis : media.sipnosis,
        url : media.url,
        imagen : media.imagen,
        fechaEstreno : media.fechaEstreno,
        genero : media.genero,
        director : media.director,
        productora : media.productora,
        tipo : media.tipo
     }
    return axiosConfig.post('/medias', data, {
        headers : headers
    })
}

const obtenerMedias = () => {
    return axiosConfig.get('/medias', {
        headers : headers
    })
}

const editarMediaPorID = (media, id) => {
    const data = {
        serial : media.serial,
        titulo : media.titulo,
        sipnosis : media.sipnosis,
        url : media.url,
        imagen : media.imagen,
        fechaEstreno : media.fechaEstreno,
        genero : media.genero,
        director : media.director,
        productora : media.productora,
        tipo : media.tipo
    }
    return axiosConfig.put('/medias/'+id, data, {
        headers : headers
    })
}

const obtenerMediaPorID = (id) => {
    return axiosConfig.get('/medias/'+id, {
        headers : headers
    })
}

export {
    crearMedia,
    obtenerMedias,
    editarMediaPorID,
    obtenerMediaPorID
}