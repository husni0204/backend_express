const { body, check } = require('express-validator');

const validatePost = [
    check('image').custom((value, { req }) => {
        if (req.method === 'POST' && !req.file) {
            throw new Error('Gambar harus diupload');
        }
        return true;
    }),
    body('title').notEmpty().withMessage('Judul tidak boleh kosong'),
    body('content').notEmpty().withMessage('Konten tidak boleh kosong'),
];

module.exports = { validatePost };
