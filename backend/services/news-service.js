import News from "../schemes/news-model.js";
import fileService from "./file-service.js";
import ApiError from "../exceptions/api-error.js";

function createNewDate(){
    const date = new Date()
    const dd = String(date.getDate()).padStart(2, '0')
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const yyyy = date.getFullYear()
    return dd + '-' + mm + '-' + yyyy
}
function subDescriptionTest(subDescription){
    const NewSubDescription = subDescription.split(',')
    NewSubDescription.forEach((cv, i, arr) => {
        if(cv.length > 10){
            arr.splice(i, 1)
        }
    });
    if(NewSubDescription.length > 3){
        NewSubDescription.splice(3, NewSubDescription.length - 3)
    }
    return NewSubDescription
}

class NewsService {
    async create(news, image) {
        const fileName = fileService.saveFile(image);
        const subDescription = subDescriptionTest(news.subDescription)
        const createdNews = await News.create({...news, image: fileName, subDescription, date: createNewDate()});
        return createdNews;
    }

    async getAll() {
        const newses = await News.find();
        return newses;
    }
    async getOne(id) {
        if (!id) {
            throw new ApiError.BadRequest("id не указан")
        }
        const news = await News.findById(id);
        return news;
    }

    async update(news) {
        if (!news._id) {
            throw new ApiError.BadRequest("id не указан")
        }
        const updatedNews = await News.findByIdAndUpdate(news._id, news, {new: true})
        return updatedNews;
    }

    async delete(id) {
        if (!id) {
            throw new ApiError.BadRequest("id не указан")
        }
        const news = await News.findByIdAndDelete(id);
        return news;
    }
}


export default new NewsService();