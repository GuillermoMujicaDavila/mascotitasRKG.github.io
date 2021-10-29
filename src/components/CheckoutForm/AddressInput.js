import React from 'react'
import {useFormContext,Controller} from "react-hook-form"
import {Grid,TextField,Button} from "@material-ui/core"

const AddressInput = ({name,label,required}) => {
    const{control} =useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller as={ TextField } 
            control={control} 
            fullWidth 
            defaultValue=''
            name={name} 
            label={label} 
            required={required}/>
        </Grid>
        
        
            
        
    )
}

export default AddressInput