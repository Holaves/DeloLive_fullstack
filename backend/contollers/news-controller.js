import NewsService from '../services/news-service.js';

class NewsController{
    async create(req, res) {
        try {
            const news = await NewsService.create(req.body, req.files.image)
            res.json(news)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const newses = await NewsService.getAll();
            return res.json(newses);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const news = await NewsService.getOne(req.params.id)
            return res.json(news)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedNews = await NewsService.update(req.body);
            return res.json(updatedNews);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const news = await NewsService.delete(req.params.id);
            return res.json(news)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}



export default new NewsController()