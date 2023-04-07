import axios from "axios"

interface bodyPost{
    description: string;
    subDescription?: [string, string?, string?];
}

class axiosReq{
    async GET <T>(url: string): Promise<T[]> {
        const resp = await axios.get(url)
        return resp.data as T[]
    }
    async GetOne <T>(url: string, id: string): Promise<T>{
        const resp = await axios.get(url + '/' + id)
        return resp.data as T
    }
    async POST(url: string, body: bodyPost, imageFile: File){
        const formData = new FormData();
        formData.append('description', body.description);
        formData.append('subDescription', JSON.stringify(body.subDescription));
        formData.append('image', imageFile);
    
        await axios.post(url, formData)
          .catch(error => {
            console.log(error);
          });
    }
    async DELETE(url: string, id: string){
        await axios.delete(url + '/' + id)
        .catch(error => {
            console.error(error);
        });
    }
}

export default new axiosReq()
