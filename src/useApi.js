import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useApi(url,attr) {

	const [returnData,setReturnData] = useState([])

    useEffect(() => {
		;(
			async() => { 
				const temp = await axios.get(url)
				setReturnData(temp.data[attr])
			}
		)();
	} , [url])
    
	return [ returnData ]//, setReturnData ];
}
