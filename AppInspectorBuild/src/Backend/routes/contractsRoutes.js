import express from 'express';
import { 
    createContract, 
    getContracts, 
    getContractById, 
    updateContract, 
    deleteContract 
} from '../controllers/ContractsController.js';
import { validateContractData } from '../utils/validation.js';

const router = express.Router();

router.post('/', validateContractData, createContract);
router.get('/', getContracts);
router.get('/:id', getContractById);
router.put('/:id', validateContractData, updateContract);
router.delete('/:id', deleteContract);

export default router;
