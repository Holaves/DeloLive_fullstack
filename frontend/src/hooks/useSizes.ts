import { useSelector } from "react-redux"
import { selectWidth } from "../components/globalSlices/windowWidthSlice"
import { WHObject } from "../types/interfaces"

export const useSizes = (defaultSizes: WHObject[],  WHType: 'width' | 'height', title: string): number => {
    const windowWidth = useSelector(selectWidth)
        let retVal = 0
        defaultSizes.forEach(cv => {
            if(cv.name === title){
                if(WHType === 'width'){
                    if(windowWidth <= 1000 && windowWidth > 768){
                        retVal = cv.width.w2
                    }
                    else if(windowWidth <= 768 && windowWidth > 480){
                        retVal = cv.width.w3
                    }
                    else if(windowWidth <= 480 && windowWidth > 320){
                        retVal = cv.width.w4
                    }
                    else if(windowWidth <= 320){
                        retVal = cv.width.w5
                    }
                    else {
                        retVal = cv.width.w1
                    }
                }
                else if(WHType === 'height'){
                    if(windowWidth <= 1000 && windowWidth > 768){
                        retVal = cv.height.h2
                    }
                    else if(windowWidth <= 768 && windowWidth > 480){
                        retVal = cv.height.h3
                    }
                    else if(windowWidth <= 480 && windowWidth > 320){
                        retVal = cv.height.h4
                    }
                    else if(windowWidth <= 320){
                        retVal = cv.height.h5
                    }
                    else {
                        retVal = cv.height.h1
                    }
                }
            }
        })
        return retVal
}