import { createContract } from '../services/contractService.js';
import { validateContractData } from '../utils/validation.js';
import { getContracts } from '../services/contractService.js';
import { getContractById } from '../services/contractService.js';
import { updateContract } from '../services/contractService.js';
import { deleteContract } from '../services/contractService.js';

// Crear un nuevo contrato
const createContractController = async (req, res) => {
    try {
        validateContractData(req.body);
        await createContract(req.body);
        res.status(201).send('Contrato creado con éxito');
    } catch (error) {
        res.status(500).send('Error al crear el contrato: ' + error.message);
    }
};

// Obtener todos los contratos
const getContractsController = async (req, res) => {
    try {
        const contracts = await getContracts();
        res.status(200).json(contracts);
    } catch (error) {
        res.status(500).send('Error al obtener contratos: ' + error.message);
    }
};

// Obtener un contrato por ID
const getContractByIdController = async (req, res) => {
    try {
        const contract = await getContractById(req.params.id);
        if (!contract) {
            return res.status(404).send('Contrato no encontrado');
        }
        res.status(200).json(contract);
    } catch (error) {
        res.status(500).send('Error al obtener el contrato: ' + error.message);
    }
};

// Actualizar un contrato
const updateContractController = async (req, res) => {
    try {
        validateContractData(req.body);
        await updateContract(req.params.id, req.body);
        res.status(200).send('Contrato actualizado con éxito');
    } catch (error) {
        res.status(500).send('Error al actualizar el contrato: ' + error.message);
    }
};

// Eliminar un contrato
const deleteContractController = async (req, res) => {
    try {
        await deleteContract(req.params.id);
        res.status(200).send('Contrato eliminado con éxito');
    } catch (error) {
        res.status(500).send('Error al eliminar el contrato: ' + error.message);
    }
};

export { 
    createContractController as createContract, 
    getContractsController as getContracts, 
    getContractByIdController as getContractById, 
    updateContractController as updateContract, 
    deleteContractController as deleteContract 
};
