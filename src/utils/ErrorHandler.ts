import { Request, Response, NextFunction } from "express"

export const ErrorHandler = (err:any, req:Request, res: Response, next:NextFunction)=>{
    console.log(err.kind)
    res.status(500).json({ message: 'An Error Occured', name:err.kind});
}