import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export function Sidebar() {

    return <FormControl>
        <FormLabel>Select Contact</FormLabel>
        <Select>
            <option value='hood'>Hook</option>
        </Select>
    </FormControl>

}