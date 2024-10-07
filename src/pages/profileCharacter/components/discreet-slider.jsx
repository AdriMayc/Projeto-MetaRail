import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function DiscreteSlider({ valueMax, onSliderChange }) {

    const [value, setValue] = React.useState(1)

    const handleChange = (event, newValue) =>{
        setValue(newValue)
		onSliderChange(newValue); // Chama a função passada pelo pai para atualizar o valor no componente pai
		
    }

	return (
		<Box className="w-60">
			<Slider
				sx={{ 
					color: "#DC1867",
					'& .MuiSlider-thumb': {
					borderRadius: '1px',
					width:'.8rem',
					height:'.7rem',
					},
				}}

				aria-label="Temperature"
				defaultValue={1}
				valueLabelDisplay="auto"
				step={1}
				marks
				min={1}
				max={valueMax}
                value={value}
                onChange={handleChange}
			/>
		</Box>
	);
}
