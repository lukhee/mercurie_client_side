import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3040',
})

export const createProduct = (payload) => api.post('/createProduct', payload)
export const insertProject = payload => api.post(`/project`, payload)
export const getAllprojects = () => api.get(`/viewAllProduct`) 
export const updateProjectById = (id, payload) => api.put(`/addEmployeeProduct/${id}`, payload)
export const deleteProjectById = id => api.delete(`/project/${id}`)
export const getProjectById = id => api.get(`/viewProduct/${id}`)

export const getAllEmployees = (payLoad) => api.post('viewAllEmployee', {member : payLoad})

const apis = {
    insertProject,
    getAllprojects,
    updateProjectById,
    deleteProjectById,
    getProjectById,
    createProduct,

    getAllEmployees
}

export default apis