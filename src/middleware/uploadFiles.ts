import multer from 'multer'
import { Request } from 'express'
import path from 'path'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'temp/')
  },
  filename: function (req, file, cb) {
    const now = new Date().getTime()
    const [, extension] = file.mimetype.split('/')
    const filename = `${now}.${extension}`
    cb(null, filename)
  },
})

async function fileFilter(req: Request, file: any, cb: any) {
  const ext = path.extname(file.originalname).toLowerCase()
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
    return cb(new Error('Only images are allowed'))
  }
  cb(null, true)
}

export const storageMiddleware = multer({ storage, fileFilter })
