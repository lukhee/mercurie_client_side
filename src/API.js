import axios from 'axios'

const api = axios.create({
    baseURL: 'https://mercurie.herokuapp.com/',
    // baseURL: "http://localhost:3040"
})

export const createProduct = (payload) => api.post('/createProduct', payload)
export const insertProject = payload => api.post(`/project`, payload)
export const getAllprojects = (limit, status) => api.get(`/?status=${status}&limit=${limit}`) 
export const updateProjectById = (id, payload) => api.put(`/addEmployeeProduct/${id}`, payload)
export const deleteProjectById = id => api.delete(`/deleteProduct/${id}`)
export const getProjectById = id => api.get(`/viewProduct/${id}`)

export const createEmployee = (payload) => api.post('/createEmployee', payload)
export const getAllEmployees = (payLoad, limit, status) => api.post(`findAllEmployees/?status=${status}&limit=${limit}`, {payLoad : payLoad})
export const getEmployeeByID = (id)=> api.get(`/findEmployeeByID/${id}`)
export const deleteEmployeeByID = (id)=> api.delete(`/deleteEmployee/${id}`)

const apis = {
    insertProject,
    getAllprojects,
    updateProjectById,
    deleteProjectById,
    getProjectById,
    createProduct,

    getAllEmployees,
    createEmployee,
    getEmployeeByID,
    deleteEmployeeByID
}

export default apis