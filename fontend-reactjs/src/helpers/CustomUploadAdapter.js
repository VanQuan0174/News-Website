import requestApi from "./api"

export default class CustomUploadAdapter {
    constructor(loader) {
        this.loader = loader
    }

    upload = () => {
        return this.loader.file.then(file => new Promise((resolve, reject) => {
            const formData = new FormData()
            formData.append('image', file)
            requestApi('/blogs/create-content-image', 'POST', formData, 'json', 'mulipart/form-data').then(res => {
                resolve({
                    default: `${process.env.REACT_APP_UPLOAD_URL}/${res.data.url}`
                })
            }).catch(err => {
                reject(err)
            })
        }))
    }
}