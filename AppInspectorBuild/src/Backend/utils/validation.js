import { body, validationResult } from 'express-validator';

export const validateContractData = [
    body('Descripcion')
        .notEmpty().withMessage('La descripción es obligatoria')
        .isLength({ min: 5 }).withMessage('La descripción debe tener al menos 5 caracteres'),
        
    body('Estado')
        .notEmpty().withMessage('El estado es obligatorio')
        .isIn(['Activo', 'Inactivo']).withMessage('El estado debe ser Activo o Inactivo'),
        
    body('Plantilla')
        .notEmpty().withMessage('La plantilla es obligatoria')
        .isString().withMessage('La plantilla debe ser un texto válido'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
