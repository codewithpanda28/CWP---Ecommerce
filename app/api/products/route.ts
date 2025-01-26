import { NextResponse } from "next/server";
import { productData } from "@/constant/data";


export const GET = async() => {
    try {
        return NextResponse.json({
            message: "Products Fetched Successfully",
            success: true,
            productData,
        })
        
    } catch (error) {
        return NextResponse.json({
            message: "Products not found",
            error
        },{
            status: 404
        })
    }
}