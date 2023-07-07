import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import characters from '../data/characters.json'

export function Sidebar({ chatData, setChatData, triggerRerender }:
    { chatData: ChatData, setChatData: React.Dispatch<any>, triggerRerender: () => void }) {

    function handleChangeContact(ev: any) {
        let tempChatData = chatData
        tempChatData.receiver.name = ev.target.value
        tempChatData.receiver.imageSrc = characters.filter((item) => item.name == ev.target.value)[0].imageSrc
        tempChatData.receiver.bio = characters.filter((item) => item.name == ev.target.value)[0].bio
        setChatData(tempChatData)
        triggerRerender()
    }

    return <FormControl>
        <FormLabel>Select Contact</FormLabel>
        <Select onChange={handleChangeContact}>
            {characters.map((item, i) => {
                return <option key={i} value={item.name}>{item.name}</option>
            })}
        </Select>
    </FormControl>

}