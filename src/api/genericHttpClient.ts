import axios from "axios";

const genericHttpClient = async (url: string, config={}): Promise<null | object> => {
    try {
        const data: any = await axios.get(url, config);

        return data.data;
    } catch (e: any) {
        console.error("Something went wrong:: ", e);
        return null;
    }
};

export default genericHttpClient;
